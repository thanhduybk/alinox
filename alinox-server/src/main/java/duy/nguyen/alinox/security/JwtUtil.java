package duy.nguyen.alinox.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

public class JwtUtil {
    public static String generateJwtToken(UserDetails userDetails) {
        long now = System.currentTimeMillis();
        long expiresIn = 3600 * 1000; // 1 hours

        return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(now))
                .setExpiration(new Date(now + expiresIn))
                .signWith(SignatureAlgorithm.HS512, "alinox")
                .compact();
    }

    public static String extractJwtToken(HttpServletRequest request) {
        String auth = request.getHeader("Authorization");

        if (StringUtils.hasText(auth) && auth.startsWith("Bearer")) {
            return auth.substring("Bearer ".length());
        } else {
            return null;
        }
    }

    public static boolean isValidJwtToken(String token) {
        try {
            Jwts.parser().setSigningKey("alinox").parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public static String obtainUsername(String token) {
        return Jwts.parser().setSigningKey("alinox").parseClaimsJws(token).getBody().getSubject();
    }
}

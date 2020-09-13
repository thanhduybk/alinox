package duy.nguyen.alinox.payload.response;

import org.springframework.http.HttpStatus;

public class ResponseBuilder {
    public static Response build(Object result, HttpStatus status) {
        Response response = new Response();

        response.setCode(status.value());
        response.setMessage(status.getReasonPhrase());

        if (result != null) {
            response.setResult(result);
        }

        return response;
    }

    public static Response build(Object result) {
        return build(result, HttpStatus.OK);
    }
}

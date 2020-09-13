package duy.nguyen.alinox.exception.handler;

import org.springframework.boot.web.servlet.error.DefaultErrorAttributes;
import org.springframework.web.context.request.WebRequest;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class MyError {
    private int code;
    private String message;
    private String reason;
    private String exception;
    private String path;
    private List<Details> errors;

    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {
        private final MyError instance = new MyError();

        public Builder code(int code) {
            instance.code = code;
            return this;
        }

        public Builder message(String message) {
            instance.message = message;
            return this;
        }

        public Builder reason(String reason) {
            instance.reason = reason;
            return this;
        }

        public Builder exception(String exception) {
            instance.exception = exception;
            return this;
        }

        public Builder path(String path) {
            instance.path = path;
            return this;
        }

        public Builder errors(List<Details> errors) {
            instance.errors = errors;
            return this;
        }

        public MyError build() {
            return instance;
        }
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

    public String getReason() {
        return reason;
    }

    public String getException() {
        return exception;
    }

    public String getPath() {
        return path;
    }

    public List<Details> getErrors() {
        return errors;
    }

    public static final class Details {
        private final String message;
        private final String reason;

        public Details(String message, String reason) {
            this.message = message;
            this.reason = reason;
        }

        public String getMessage() {
            return message;
        }

        public String getReason() {
            return reason;
        }
    }

    public static final class Attributes extends DefaultErrorAttributes {
        private static final boolean INCLUDE_EXCEPTION = true;
        private static final boolean INCLUDE_STACKTRACE = false;

        public Attributes() {
            super(INCLUDE_EXCEPTION);
        }

        @Override
        public Map<String, Object> getErrorAttributes(WebRequest webRequest, boolean includeStackTrace) {
            Map<String, Object> defaultAttrs = super.getErrorAttributes(webRequest, INCLUDE_STACKTRACE);

            String reason = (int) defaultAttrs.getOrDefault("status", 500) == 403 ?
                    getForbiddenReason() : (String) defaultAttrs.getOrDefault("message", "Reason unknown");

            Map<String, Object> attrs = new LinkedHashMap<>();
            ;

            attrs.put("code", defaultAttrs.getOrDefault("status", 500));
            attrs.put("message", defaultAttrs.getOrDefault("error", "Internal server error"));
            attrs.put("reason", reason);
            attrs.put("exception", defaultAttrs.getOrDefault("exception", "Unknown"));
            attrs.put("path", defaultAttrs.getOrDefault("path", "Unknown"));

            return attrs;
        }

        private String getForbiddenReason() {
            return "Your account cannot access to this resource. Please contact admin to get more details";
        }
    }
}

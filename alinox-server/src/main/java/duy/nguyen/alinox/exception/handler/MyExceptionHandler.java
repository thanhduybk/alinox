package duy.nguyen.alinox.exception.handler;

import duy.nguyen.alinox.exception.BadRequestException;
import duy.nguyen.alinox.exception.handler.MyError.Details;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.ConversionNotSupportedException;
import org.springframework.beans.TypeMismatchException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.lang.NonNull;
import org.springframework.validation.BindException;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.HttpMediaTypeNotAcceptableException;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingPathVariableException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.multipart.support.MissingServletRequestPartException;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@RestControllerAdvice
public class MyExceptionHandler extends ResponseEntityExceptionHandler {
    private static final Logger log = LoggerFactory.getLogger(MyExceptionHandler.class);

    @Override
    @NonNull
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            @NonNull MethodArgumentNotValidException exception, @NonNull HttpHeaders headers,
            @NonNull HttpStatus status, @NonNull WebRequest request) {

        log.error(exception.getLocalizedMessage());

        final ArrayList<Details> detailErrors = new ArrayList<>();
        for (final FieldError error : exception.getBindingResult().getFieldErrors()) {
            detailErrors.add(new Details(
                    error.getDefaultMessage(),
                    error.getField() + " was given with value " + error.getRejectedValue()
            ));
        }
        for (final ObjectError error : exception.getBindingResult().getGlobalErrors()) {
            detailErrors.add(new Details(
                    error.getDefaultMessage(),
                    error.getDefaultMessage()
            ));
        }

        MyError error = MyError.builder()
                .code(400)
                .message("Bad request")
                .exception(exception.getClass().getName())
                .reason("Some parameters was failed to validate")
                .path(request.getDescription(false).substring(4))
                .errors(detailErrors)
                .build();

        return new ResponseEntity<>(error, BAD_REQUEST);
    }

    @Override
    @NonNull
    protected ResponseEntity<Object> handleBindException(@NonNull BindException ex, @NonNull HttpHeaders headers, @NonNull HttpStatus status, @NonNull WebRequest request) {
        log.error(ex.getLocalizedMessage());

        final ArrayList<Details> detailErrors = new ArrayList<>();
        for (final FieldError error : ex.getBindingResult().getFieldErrors()) {
            String reason;

            if (error.getRejectedValue() == null) {
                reason = error.getField() + " was given with value " + error.getRejectedValue();
            } else if (error.getRejectedValue().getClass().isPrimitive() || error.getRejectedValue() instanceof String) {
                reason = error.getField() + " was given with value " + error.getRejectedValue();
            } else {
                reason = error.getField() + " was given with invalid value";
            }

            detailErrors.add(new Details(error.getDefaultMessage(), reason));
        }
        for (final ObjectError error : ex.getBindingResult().getGlobalErrors()) {
            detailErrors.add(new Details(
                    error.getDefaultMessage(),
                    error.getObjectName() + " was given with value that cannot be bound"
            ));
        }

        MyError error = MyError.builder()
                .code(400)
                .message("Bad request")
                .exception(ex.getClass().getName())
                .reason("Failed to validate request body")
                .path(request.getDescription(false).substring(4))
                .errors(detailErrors)
                .build();

        return new ResponseEntity<>(error, BAD_REQUEST);
    }

    @Override
    @NonNull
    protected ResponseEntity<Object> handleTypeMismatch(
            TypeMismatchException ex, @NonNull HttpHeaders headers, @NonNull HttpStatus status, WebRequest request) {
        log.error(ex.getLocalizedMessage());

        List<Details> errors = new ArrayList<>();
        errors.add(new Details(ex.getPropertyName() + " should be of type " + ex.getRequiredType(),
                ex.getPropertyName() + " was given with value " + ex.getValue()));

        MyError error = MyError.builder()
                .code(400)
                .message("Bad request")
                .exception(ex.getClass().getName())
                .reason(ex.getMostSpecificCause().getMessage())
                .path(request.getDescription(false).substring(4))
                .errors(errors)
                .build();

        return new ResponseEntity<>(error, BAD_REQUEST);
    }


    @Override
    @NonNull
    protected ResponseEntity<Object> handleMissingServletRequestParameter(
            MissingServletRequestParameterException ex, @NonNull HttpHeaders headers, @NonNull HttpStatus status, WebRequest request) {
        log.error(ex.getLocalizedMessage());
        List<Details> errors = new ArrayList<>();
        errors.add(new Details(ex.getParameterName() + " should be of type " + ex.getParameterType(),
                ex.getParameterName() + " is missing"));

        MyError error = MyError.builder()
                .code(400)
                .message("Bad request")
                .exception(ex.getClass().getName())
                .reason("Servlet request parameter(s) is missing")
                .path(request.getDescription(false).substring(4))
                .errors(errors)
                .build();

        return new ResponseEntity<>(error, BAD_REQUEST);
    }

    @Override
    @NonNull
    protected ResponseEntity<Object> handleMissingServletRequestPart(
            MissingServletRequestPartException ex, @NonNull HttpHeaders headers, @NonNull HttpStatus status, WebRequest request) {
        log.error(ex.getLocalizedMessage());

        List<Details> errors = new ArrayList<>();
        errors.add(new Details(ex.getRootCause().getMessage(),
                ex.getRequestPartName() + " is missing"));


        MyError error = MyError.builder()
                .code(400)
                .message("Bad request")
                .exception(ex.getClass().getName())
                .reason("Servlet request part(s) is missing")
                .path(request.getDescription(false).substring(4))
                .errors(errors)
                .build();

        return new ResponseEntity<>(error, BAD_REQUEST);
    }

    @Override
    @NonNull
    protected ResponseEntity<Object> handleMissingPathVariable(
            MissingPathVariableException ex, @NonNull HttpHeaders headers, @NonNull HttpStatus status, WebRequest request) {
        log.error(ex.getLocalizedMessage());

        List<Details> errors = new ArrayList<>();
        errors.add(new Details(ex.getRootCause().getMessage(),
                ex.getVariableName() + " is missing"));

        MyError error = MyError.builder()
                .code(400)
                .message("Bad request")
                .exception(ex.getClass().getName())
                .reason("Path variable(s) is missing")
                .path(request.getDescription(false).substring(4))
                .errors(errors)
                .build();

        return new ResponseEntity<>(error, BAD_REQUEST);
    }

    @ExceptionHandler({MethodArgumentTypeMismatchException.class})
    protected ResponseEntity<Object> handleMethodArgumentTypeMismatch(MethodArgumentTypeMismatchException ex, WebRequest request) {
        log.error(ex.getLocalizedMessage());

        List<Details> errors = new ArrayList<>();
        errors.add(new Details("'" + ex.getName() + "' should be type of " + ex.getRequiredType(),
                "'" + ex.getName() + "' parameter was given with " + ex.getValue()));

        MyError error = MyError.builder()
                .code(400)
                .message("Bad request")
                .exception(ex.getClass().getName())
                .reason("Types of method arguments are currently mismatch")
                .path(request.getDescription(false).substring(4))
                .errors(errors)
                .build();

        return new ResponseEntity<>(error, BAD_REQUEST);
    }

    @ExceptionHandler(BadRequestException.class)
    protected ResponseEntity<?> handlePersistenceException(BadRequestException exception, WebRequest webRequest) {
        log.error(exception.getLocalizedMessage());

        MyError error = MyError.builder()
                .code(400)
                .message("Bad request")
                .exception(exception.getClass().getName())
                .reason(exception.getMessage())
                .path(webRequest.getDescription(false).substring(4))
                .build();

        return new ResponseEntity<>(error, BAD_REQUEST);
    }

    @Override
    protected ResponseEntity<Object> handleHttpMediaTypeNotSupported(HttpMediaTypeNotSupportedException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        log.error(ex.getLocalizedMessage());

        MyError error = MyError.builder()
                .code(400)
                .message("Bad request")
                .exception(ex.getClass().getName())
                .reason(ex.getMessage())
                .path(request.getDescription(false).substring(4))
                .build();

        return new ResponseEntity<>(error, BAD_REQUEST);
    }

    @Override
    protected ResponseEntity<Object> handleHttpMediaTypeNotAcceptable(HttpMediaTypeNotAcceptableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        log.error(ex.getLocalizedMessage());

        MyError error = MyError.builder()
                .code(400)
                .message("Bad request")
                .exception(ex.getClass().getName())
                .reason(ex.getMessage())
                .path(request.getDescription(false).substring(4))
                .build();

        return new ResponseEntity<>(error, BAD_REQUEST);
    }

    @Override
    protected ResponseEntity<Object> handleServletRequestBindingException(ServletRequestBindingException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        log.error(ex.getLocalizedMessage());

        MyError error = MyError.builder()
                .code(400)
                .message("Bad request")
                .exception(ex.getClass().getName())
                .reason(ex.getMessage())
                .path(request.getDescription(false).substring(4))
                .build();

        return new ResponseEntity<>(error, BAD_REQUEST);
    }

    @Override
    protected ResponseEntity<Object> handleConversionNotSupported(ConversionNotSupportedException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        log.error(ex.getLocalizedMessage());

        MyError error = MyError.builder()
                .code(400)
                .message("Bad request")
                .exception(ex.getClass().getName())
                .reason(ex.getMessage())
                .path(request.getDescription(false).substring(4))
                .build();

        return new ResponseEntity<>(error, BAD_REQUEST);
    }

    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        log.error(ex.getLocalizedMessage());

        MyError error = MyError.builder()
                .code(400)
                .message("Bad request")
                .exception(ex.getClass().getName())
                .reason(ex.getMessage())
                .path(request.getDescription(false).substring(4))
                .build();

        return new ResponseEntity<>(error, BAD_REQUEST);
    }

    @Override
    protected ResponseEntity<Object> handleHttpMessageNotWritable(HttpMessageNotWritableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        log.error(ex.getLocalizedMessage());

        MyError error = MyError.builder()
                .code(400)
                .message("Bad request")
                .exception(ex.getClass().getName())
                .reason(ex.getMessage())
                .path(request.getDescription(false).substring(4))
                .build();

        return new ResponseEntity<>(error, BAD_REQUEST);
    }

    @Override
    protected ResponseEntity<Object> handleNoHandlerFoundException(NoHandlerFoundException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        log.error(ex.getLocalizedMessage());

        MyError error = MyError.builder()
                .code(400)
                .message("Bad request")
                .exception(ex.getClass().getName())
                .reason(ex.getMessage())
                .path(request.getDescription(false).substring(4))
                .build();

        return new ResponseEntity<>(error, BAD_REQUEST);
    }

    @Override
    protected ResponseEntity<Object> handleExceptionInternal(Exception ex, Object body, HttpHeaders headers, HttpStatus status, WebRequest request) {
        log.error(ex.getLocalizedMessage());

        MyError error = MyError.builder()
                .code(400)
                .message("Bad request")
                .exception(ex.getClass().getName())
                .reason(ex.getMessage())
                .path(request.getDescription(false).substring(4))
                .build();

        return new ResponseEntity<>(error, BAD_REQUEST);
    }
}

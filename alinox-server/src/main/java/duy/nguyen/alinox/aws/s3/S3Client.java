package duy.nguyen.alinox.aws.s3;

import software.amazon.awssdk.core.ResponseBytes;
import software.amazon.awssdk.services.s3.S3AsyncClient;
import software.amazon.awssdk.services.s3.model.GetObjectResponse;
import software.amazon.awssdk.services.s3.model.PutObjectResponse;

import java.io.File;
import java.util.concurrent.CompletableFuture;

public interface S3Client {
    CompletableFuture<PutObjectResponse> put(String bucket, String key, File file);

    CompletableFuture<PutObjectResponse> put(String bucket, String key, byte[] bytes);

    CompletableFuture<ResponseBytes<GetObjectResponse>> get(String bucket, String key);

    S3AsyncClient getClient();
}

package duy.nguyen.alinox.aws.s3;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.core.ResponseBytes;
import software.amazon.awssdk.core.async.AsyncRequestBody;
import software.amazon.awssdk.core.async.AsyncResponseTransformer;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3AsyncClient;
import software.amazon.awssdk.services.s3.model.*;

import java.io.File;
import java.util.concurrent.CompletableFuture;

@Service
public class S3ClientImpl implements S3Client {
    private final S3AsyncClient s3;

    public S3ClientImpl(@Value("${s3.access-key}") String accessKey, @Value("${s3.secret-key}") String secretKey) {
        s3 = S3AsyncClient.builder()
                .region(Region.AP_SOUTHEAST_1)
                .credentialsProvider(StaticCredentialsProvider.create(AwsBasicCredentials.create(accessKey, secretKey)))
                .build();
    }

    public S3AsyncClient getClient() {
        return s3;
    }

    @Override
    public CompletableFuture<PutObjectResponse> put(String bucket, String key, File file) {
        PutObjectRequest request = PutObjectRequest.builder()
                .bucket(bucket).key(key).acl(ObjectCannedACL.PUBLIC_READ).build();

        return s3.putObject(request, AsyncRequestBody.fromFile(file));
    }

    @Override
    public CompletableFuture<PutObjectResponse> put(String bucket, String key, byte[] bytes) {
        PutObjectRequest request = PutObjectRequest.builder()
                .bucket(bucket).key(key).acl(ObjectCannedACL.PUBLIC_READ).build();

        return s3.putObject(request, AsyncRequestBody.fromBytes(bytes));
    }

    @Override
    public CompletableFuture<ResponseBytes<GetObjectResponse>> get(String bucket, String key) {
        GetObjectRequest request = GetObjectRequest.builder()
                .bucket(bucket).key(key).build();

        return s3.getObject(request, AsyncResponseTransformer.toBytes());
    }
}

package duy.nguyen.alinox.service;

import duy.nguyen.alinox.payload.request.wiper.CreateInkWiperRequest;
import duy.nguyen.alinox.payload.request.wiper.UpdateInkWiperRequest;
import duy.nguyen.alinox.payload.response.InkWiperResponse;
import duy.nguyen.alinox.security.MyUserDetails;

import java.util.List;

public interface InkWiperService {
    InkWiperResponse createInkWiper(CreateInkWiperRequest request, MyUserDetails me);

    InkWiperResponse updateInkWiper(Long wiperId, UpdateInkWiperRequest request, MyUserDetails me);

    void deleteInkWiper(Long wiperId, MyUserDetails me);

    List<InkWiperResponse> listInkWipers(Long customerId);

    List<InkWiperResponse> findAllBuiltIn();
}

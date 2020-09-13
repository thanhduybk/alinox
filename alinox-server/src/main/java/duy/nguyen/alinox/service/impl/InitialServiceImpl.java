package duy.nguyen.alinox.service.impl;

import duy.nguyen.alinox.repository.MyRepository;
import duy.nguyen.alinox.service.InitialService;
import org.springframework.stereotype.Service;

@Service
public class InitialServiceImpl implements InitialService {
    private final MyRepository myRepository;

    public InitialServiceImpl(MyRepository myRepository) {
        this.myRepository = myRepository;
    }

    @Override
    public Object loadUserInitialData(Long userId) {
        return null;
    }
}

package duy.nguyen.alinox.service.impl;

import duy.nguyen.alinox.payload.response.ClazzResponse;
import duy.nguyen.alinox.payload.util.ClazzBeanUtil;
import duy.nguyen.alinox.repository.ClazzRepository;
import duy.nguyen.alinox.service.ClazzService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClazzServiceImpl implements ClazzService {
    private final ClazzRepository clazzRepository;

    public ClazzServiceImpl(ClazzRepository clazzRepository) {
        this.clazzRepository = clazzRepository;
    }

    @Override
    public List<ClazzResponse> listClasses() {
        return clazzRepository.findAll().stream().map(ClazzBeanUtil::convert2Dto).collect(Collectors.toList());
    }
}

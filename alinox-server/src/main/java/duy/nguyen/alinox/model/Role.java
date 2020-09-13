package duy.nguyen.alinox.model;

public enum Role {
    MASTER, MANAGER, EMPLOYEE,
    ;


    public static Role findByName(String name) {
        for (Role role : values()) {
            if (role.name().equalsIgnoreCase(name)) {
                return role;
            }
        }

        return null;
    }
}

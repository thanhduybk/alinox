set search_path to alinox;

create table customer
(
    customer_id bigserial    not null primary key,
    code        varchar(255) not null,
    name        varchar(255) not null,
    username    varchar(255) not null,
    password    varchar(255) not null,
    created_at  timestamp without time zone default current_timestamp,
    updated_at  timestamp without time zone default current_timestamp,
    locale      varchar(255)                default 'Asia/Ho_Chi_Minh',
    country     varchar(255) not null,
    province    varchar(255) not null
);

create unique index customer_code_idx on customer (code);
create unique index customer_username_idx on customer (username);

create table clazz
(
    clazz_id bigserial    not null primary key,
    name     varchar(255) not null,
    type     varchar(255) not null,
    par      varchar(255) not null,
    tac      varchar(255) not null
);

create table material
(
    material_id bigserial    not null primary key,
    name        varchar(255) not null,
    clazz_id    bigint       not null,
    created_by  bigint,
    original_id bigint,
    state       varchar(8),
    created_at  timestamp without time zone default current_timestamp,
    updated_at  timestamp without time zone default current_timestamp
);

create unique index CONCURRENTLY unique_name on material (name);

alter table material
    add constraint clazz_fk foreign key (clazz_id) references clazz (clazz_id) on delete cascade;
alter table material
    add constraint customer_fk foreign key (created_by) references customer (customer_id) on delete cascade;
alter table material
    add constraint material_fk foreign key (original_id) references material (material_id) on delete set null;

create table printer
(
    printer_id  bigserial        not null primary key,
    name        varchar(255)     not null,
    max_rh      double precision,
    max_rw      double precision not null,
    min_rh      double precision,
    min_rw      double precision,
    max_ph      double precision,
    max_pw      double precision,
    min_ph      double precision,
    min_pw      double precision,
    print_unit  int              not null,
    created_by  bigint,
    original_id bigint,
    state       varchar(8),
    created_at  timestamp without time zone default current_timestamp
);

alter table printer
    add constraint customer_fk foreign key (created_by) references customer (customer_id) on delete cascade;
alter table printer
    add constraint printer_fk foreign key (original_id) references printer (printer_id) on delete set null;

create table wiper
(
    ink_wiper_id bigserial not null primary key,
    thick        int       not null,
    resolution   int       not null,
    customer_id  bigint,
    original_id  bigint,
    state        varchar(8),
    created_at   timestamp without time zone default current_timestamp
);

alter table wiper
    add constraint customer_fk foreign key (customer_id) references customer (customer_id) on delete cascade;
alter table wiper
    add constraint wiper_fk foreign key (original_id) references wiper (ink_wiper_id) on delete set null;

create table artwork
(
    artwork_id        bigserial    not null primary key,
    property_name     varchar(255) not null,
    preferred_bcm     varchar(255) not null,
    ink_volume        int          not null,
    alinox_resolution int          not null,
    open_degree       int          not null,
    thick_degree      int          not null,
    angle             int          not null,
    shape             varchar(255) not null,
    cell_depth        int          not null,
    "do"              int          not null,
    wiper_id          bigint       not null,
    created_by        bigint,
    original_id       bigint,
    state             varchar(8),
    created_at        timestamp without time zone default current_timestamp
);

alter table artwork
    add constraint wiper_fk foreign key (wiper_id) references wiper (ink_wiper_id) on delete cascade;
alter table artwork
    add constraint customer_fk foreign key (created_by) references customer (customer_id) on delete cascade;
alter table artwork
    add constraint artwork_fk foreign key (original_id) references artwork (artwork_id) on delete set null;

create table report
(
    report_id          bigserial    not null primary key,
    customer_id        bigint       not null,
    clazz_id           bigint       not null,
    material_id        bigint       not null,
    printer_id         bigint       not null,
    num_colors         int          not null,
    product            varchar(255) not null,
    ink                varchar(255) not null,
    artwork_resolution int          not null,
    tram               varchar(255) not null,
    tram_rotation      varchar(255) not null,
    created_at         timestamp without time zone default current_timestamp,
    storage_path       varchar(255) not null
);

alter table report
    add constraint customer_fk foreign key (customer_id) references customer (customer_id) on delete cascade;
alter table report
    add constraint clazz_fk foreign key (clazz_id) references clazz (clazz_id) on delete cascade;
alter table report
    add constraint material_fk foreign key (material_id) references material (material_id) on delete cascade;
alter table report
    add constraint printer_fk foreign key (printer_id) references printer (printer_id) on delete cascade;

create table artwork_instance
(
    artwork_instance_id bigserial    not null primary key,
    report_id           bigint       not null,
    artwork_id          bigint       not null,
    alinox_axis         int          not null,
    color               varchar(255) not null
);

alter table artwork_instance
    add constraint report_fk foreign key (report_id) references report (report_id) on DELETE cascade;
alter table artwork_instance
    add constraint artwork_fk foreign key (artwork_id) references artwork (artwork_id) on delete cascade;
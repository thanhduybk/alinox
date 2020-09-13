set search_path to alinox;

update artwork
set property_name = 'Trame & Solid (doctor blade)'
where property_name = 'Tram và nền (DGM)';
update artwork
set property_name = 'Trame & Solid (rubber roll blade)'
where property_name = 'Tram và nền (DGMCS)';
update artwork
set property_name = 'Line & Text (doctor blade)'
where property_name = 'Đường và chữ (DGM)';
update artwork
set property_name = 'Line & Text (rubber roll)'
where property_name = 'Đường và chữ (DGMCS)';
update artwork
set property_name = 'Line & Solid (doctor blade)'
where property_name = 'Đường và nền (DGM)';
update artwork
set property_name = 'Line & Solid (rubber roll)'
where property_name = 'Đường và nền (DGMCS)';
update artwork
set property_name = 'Full plate Solid & Varnish (doctor blade)'
where property_name = 'Nền và varnish (DGM)';
update artwork
set property_name = 'Full plate Solid & Varnish (rubber roll)'
where property_name = 'Nền và varnish (DGMCS)';
update artwork
set property_name = 'Trame & Text'
where property_name = 'Tram và chữ';
update artwork
set property_name = 'Line & Text'
where property_name = 'Đường và chữ';
update artwork
set property_name = 'Line & Solid'
where property_name = 'Đường và nền';
update artwork
set property_name = 'Solid'
where property_name = 'Nền';
update artwork
set property_name = 'Solid & Opaque White'
where property_name = 'Nền có lót trắng';

update artwork
set property_name = replace(property_name, 'Tram', 'Trame')
where property_name like '%lpi';



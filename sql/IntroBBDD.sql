-- 1. Escribe una consulta que recupere los Vuelos (flights) y su identificador que figuren con status On Time.
SELECT flight_id, status
FROM bookings.flights
WHERE status = 'On Time';

-- 2. Escribe una consulta que extraiga todas las columnas de la tabla bookings y refleje todas las reservas que han supuesto una cantidad total mayor a 1.000.000 (Unidades monetarias).
SELECT *
FROM bookings.bookings
WHERE total_amount > 1000000;
-- No aparecen resultados en la base que he instalado.


-- 3. Escribe una consulta que extraiga todas las columnas de los datos de los modelos de aviones disponibles (aircraft_data). Puede que os aparezca en alguna actualización como "aircrafts_data", revisad las tablas y elegid la que corresponda.
-- En mi base la tabla se llma airplanes_data
SELECT *
FROM bookings.airplanes_data;

-- 4. Con el resultado anterior visualizado previamente, escribe una consulta que extraiga los identificadores de vuelo que han volado con un Boeing 737. (Código Modelo Avión = 733)
-- Relaciono los vuelos con las rutas para consultar el avion 
SELECT f.flight_id
FROM bookings.flights AS f
JOIN bookings.routes AS r
  ON f.route_no = r.route_no
  AND r.validity @> f.scheduled_departure
WHERE r.airplane_code = '733';

-- No aparecen resultados porque en esta versión no está el código 733.

-- 5. Escribe una consulta que te muestre la información detallada de los tickets que han comprado las personas que se llaman Irina.
SELECT *
FROM bookings.tickets
WHERE passenger_name ILIKE 'Irina %';


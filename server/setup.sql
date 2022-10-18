DROP TABLE IF EXISTS entity CASCADE;
DROP TABLE IF EXISTS locations CASCADE;
DROP TABLE IF EXISTS incidents CASCADE;

CREATE TABLE entity(
    entity_id INT GENERATED ALWAYS AS IDENTITY,
    entity_name VARCHAR(30) NOT NULL,
    entity_type VARCHAR(30) NOT NULL,
    PRIMARY KEY (entity_id)
);

INSERT INTO entity(entity_name, entity_type)
VALUES ('Dracula', 'Vampire');

CREATE TABLE locations(
    locations_id INT GENERATED ALWAYS AS IDENTITY, 
    locations_name VARCHAR(50) NOT NULL, 
    PRIMARY KEY (locations_id)
);

INSERT INTO locations(locations_name)
VALUES ('London');

CREATE TABLE incidents(
    incident_id INT GENERATED ALWAYS AS IDENTITY,
    entity_id INT NOT NULL,
    location_id INT NOT NULL,
    incident_time CHAR(5) NOT NULL,
    incident_level VARCHAR(30) DEFAULT 'Low',
    incident_description VARCHAR(70) NOT NULL,
    PRIMARY KEY (incident_id),
    FOREIGN KEY (entity_id) REFERENCES entity(entity_id),
    FOREIGN KEY (location_id) REFERENCES locations(locations_id)
);

INSERT INTO incidents(entity_id, location_id, incident_time, incident_description )
VALUES(1, 1, '00:00', 'Dracula was out partying at UCL freshers fair');

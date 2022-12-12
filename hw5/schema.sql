CREATE TABLE contacts (
    id int NOT NULL AUTO_INCREMENT,
    email varchar(255),
    title varchar(255) NOT NULL,
    username varchar(255) NOT NULL,
    link varchar(255),
    category varchar(255) NOT NULL,
    msg text NOT NULL,
    PRIMARY KEY(id)
);


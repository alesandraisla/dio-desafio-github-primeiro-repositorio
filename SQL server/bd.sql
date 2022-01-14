CREATE TABLE Planetas(
    IdPlaneta int NOT NULL, 
    Nome varchar(50) NOT NULL, 
    Rotacao float NOT NULL, 
    Orbita float NOT NULL, 
    Diametro float NOT NULL, 
    Clima varchar (50) NOT NULL, 
    Populacao int NOT NULL, 
)
GO 
ALTER TABLE Planetas ADD CONSTRAINT PK_Planetas PRIMARY KEY (IdPlaneta);

CREATE TABLE Pilotos (
    IdPiloto int NOT NULL, 
    Nome varchar(200) NOT NULL, 
    AnoNascimento varchar(10) NOT NULL, 
    IdPlaneta int NOT NULL, 
)
GO 
ALTER TABLE Pilotos ADD CONSTRAINT PK_Pilotos PRIMARY KEY (IdPiloto);
GO
ALTER TABLE Pilotos ADD CONSTRAINT FK_Pilotos_Planetas FOREIGN KEY (IdPlaneta)
REFERENCES Planetas (IdPlaneta)

CREATE TABLE PilotosNaves(
    IdPiloto int NOT NULL, 
    IdNave int NOT NULL, 
    FlagAutorizado bit NOT NULL,
)
GO 
ALTER TABLE PilotosNaves ADD CONSTRAINT Pk_PilotosNaves PRIMARY KEY (IdPiloto, IdNave);
GO
ALTER TABLE PilotosNaves ADD CONSTRAINT Fk_PilotosNaves FOREIGN KEY (IdPiloto) REFERENCES Pilotos (IdPiloto)
GO 
ALTER TABLE PilotosNaves ADD CONSTRAINT Fk_PilotosNaves_Naves FOREIGN KEY (IdNave) REFERENCES Naves (IdNave)
GO 
ALTER TABLE PilotosNaves ADD CONSTRAINT DF_PilotosNaves_FlagAutorizado DEFAULT  (1) FOR FlagAutorizado

CREATE TABLE HistoricoViagens(
    IdNave int NOT NULL, 
    IdPiloto int NOT NULL, 
    DtSaida datetime NOT NULL, 
    DtChegada datetime NOT NULL
)
GO 
ALTER TABLE HistoricoViagens ADD CONSTRAINT fk_HistoricoViagens_PilotosNaves FOREIGN KEY (IdPiloto)
REFERENCES PilotosNaves (IdPiloto, IdNave)
GO
ALTER TABLE HistoricoViagens CHECK CONSTRAINT FK_HistoricoViagens_PilotosNaves

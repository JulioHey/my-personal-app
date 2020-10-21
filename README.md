TODO:

    -- [x] Organizate all files in the context they need;

    -- [x] Add all GameEntities;
        -- [x] Team
            -- [x] Get all constrains;
        -- [x] Player
            -- [x] Get Player by Position
            -- [x] Get Player by Team
            -- [x] Get all constrains;
        -- [x] Champion
            -- [x] Get champion nubmers of bans
            -- [x] Get all constrains;
        -- [x] Round
            -- [x] Get all constrains;
        -- [x] Match
            -- [x] Get future team Match
            -- [x] Get all constrains;
        -- [x] PLayerMatch
            -- [x] Implement changes to playerValue by Pontuation
            -- [x] Get all constrains;
        -- [x] TeamMatch
            -- [x] Get all constrains;
        -- [x] MatchDragons
            -- [x] Get all constrains;
        -- [x] PlayerStatus
            -- [x] Get all constrains;
            -- [x] Auto calculate player Pontuation with the schema
        -- [x] TeamStatus
            -- [x] Get all constrains;
            -- [] Auto calculate coach Pontuation with the schema


    -- [x] Add all UserEntities;
        -- [x] Users
            -- [x] Unique email
        -- [x] Roles
            -- [x] Only Two Roles ==> User and Admin 
        -- [x] UserRole
        -- [x] Permission
        -- [x] PermissionRoles
        -- [x] Password

        -- [x] Login and Creation of User 
        -- [x] Add crypto to password
        -- [x] Doesnt allow creating repetead userEmails;
        -- [x] Reorganizate routes

    -- [] Add all AppEntities;
        -- [x] Add all UserTeam;
            -- [] Update UserTeam patrimony with the changes on the player values;
            -- [] Update total pontuation in the tournament
        -- [x] Add all UserFriends;
            -- [] Get UserFriends with UserID;
        -- [x] Add all UserEscalation;
            -- [] Get playerPontuation with playerId and RoundID;
            -- [] Get championPontuation with championId and RoundID;
            -- [] Get UserEscalation with UserID;
            -- [] Update user escalation;
        -- [x] Add all Competitions;
        -- [x] Add all UserCompetitions;
            -- [] Get Competitions with UserID;
    
    -- [] Review all entities, and column names;
    -- [x] Implement uuid;
    -- [] Implement businnes rules;
    -- [x] Dont use default export, just for base classes;

    -- [] Implement Authentication;
        -- [x] Add admin middlewares;
        -- [] User authentication to edit their rows;
TODO:

    -- [x] Organizate all files in the context they need;

    -- [x] Add all GameEntities;
        -- [x] Team
        -- [x] Player
            -- [] Get Player by Position
            -- [] Get Player by Team
            -- [] Update Player value
        -- [x] Champion
            -- [] Get champion nubmers of bans
        -- [x] Round
        -- [x] Match
            -- [] Get future team Match
        -- [x] PLayerMatch
            -- [] Implement changes to playerValue by Pontuation
        -- [x] TeamMatch
        -- [x] MatchDragons
        -- [x] PlayerStatus
            -- [] Auto calculate player Pontuation with the schema
        -- [x] TeamStatus
            -- [] Auto calculate coach Pontuation with the schema
        -- [x] TeamDragons


    -- [x] Add all UserEntities;
        -- [x] Users
            -- [] Unique email
        -- [x] Roles
            -- [] Only Two Roles ==> User and Admin 
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
        -- [] Add all Competitions;
        -- [] Add all UserCompetitions;
            -- [] Get Competitions with UserID;
    
    -- [] Review all entities, and column names;
    -- [x] Implement uuid;
    -- [] Implement businnes rules;
    -- [x] Dont use default export, just for base classes;

    -- [] Implement Authentication;
        -- [x] Add admin middlewares;
        -- [] User authentication to edit their rows;
interface BaseTeamModel {
    teamName: string;
};

interface IBaseTeamRepo {
    create(BaseTeamModel): Promise<any>;
};

export {
    BaseTeamModel,
    IBaseTeamRepo,
}
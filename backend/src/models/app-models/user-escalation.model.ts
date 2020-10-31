import { injectable } from "tsyringe";
import { BaseEntity, Column, Entity, getRepository, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Repository } from "typeorm";
import { UserEscalationI } from "../../interfaces/app-interfaces/user-escalation.interface";
import RepoI from "../../interfaces/model.interface";
import { UserModel } from "../auth-models/user.model";
import { ChampionModel } from "../game-models/champion.model";
import { PlayerModel } from "../game-models/player.model";
import { RoundModel } from "../game-models/round.model";


@injectable()
@Entity({name: "user_escalations"})
export class UserEscalationModel extends BaseEntity implements UserEscalationI{
    @PrimaryGeneratedColumn({name: "user_escalation_id"})
    userEscaltionId: string;

    @Column({name: "user_id"})
    userId: string;

    @Column({name: "round_id"})
    roundId: number;

    @Column({name: "coach_id"})
    coach_id: number;

    @Column({name: "top_laner_id"})
    toplaner: number;

    @Column({name: "jungler_id"})
    jungler: number;
    
    @Column({name: "mid_laner_id"})
    midlaner: number;

    @Column({name: "ad_carry_id"})
    adcarry: number;

    @Column({name: "support_id"})
    support: number;

    @Column({name: "first_ban_id"})
    firstBan: number;

    @Column({name: "second_ban_id"})
    secondBan: number;
    
    @Column({name: "third_ban_id"})
    thirdBan: number;

    @Column({name: "user_pontuation"})
    userPontuation: number;

    @ManyToOne(
        () => UserModel,
        user => user.escalationConnection,
        {primary: true}
    )
    @JoinColumn({name: "user_id"})
    userConnection: Promise<UserModel>;

    
    @ManyToOne(
        () => RoundModel,
        round => round.escalationConnection,
        {primary: true}
    )
    @JoinColumn({name: "round_id"})
    roundConnection: Promise<RoundModel>;

    @ManyToOne(
        () => PlayerModel,
        player => player.coachConnection,
        {primary: true}
    )
    @JoinColumn({name: "coach_id"})
    coachConnection: Promise<PlayerModel>;

    @ManyToOne(
        () => PlayerModel,
        player => player.topLanerConnection,
        {primary: true}
    )
    @JoinColumn({name: "top_laner_id"})
    topLanerConnection: Promise<PlayerModel>;

    @ManyToOne(
        () => PlayerModel,
        player => player.junglerConnection,
        {primary: true}
    )
    @JoinColumn({name: "jungler_id"})
    junglerConnection: Promise<PlayerModel>;

    @ManyToOne(
        () => PlayerModel,
        player => player.midLanerConnection,
        {primary: true}
    )
    @JoinColumn({name: "mid_laner_id"})
    midLanerConnection: Promise<PlayerModel>;

    @ManyToOne(
        () => PlayerModel,
        player => player.adCarryConnection,
        {primary: true}
    )
    @JoinColumn({name: "ad_carry_id"})
    adCarryConnection: Promise<PlayerModel>;

    @ManyToOne(
        () => PlayerModel,
        player => player.supportConnection,
        {primary: true}
    )
    @JoinColumn({name: "support_id"})
    supportConnection: Promise<PlayerModel>;

    @ManyToOne(
        () => ChampionModel,
        champion => champion.firstPlayerBanConnection,
        {primary: true}
    )
    @JoinColumn({name: "first_ban_id"})
    firstBanConnection: Promise<ChampionModel>;

    @ManyToOne(
        () => ChampionModel,
        champion => champion.secondPlayerBanConnection,
        {primary: true}
    )
    @JoinColumn({name: "second_ban_id"})
    secondBanConnection: Promise<ChampionModel>;

    @ManyToOne(
        () => ChampionModel,
        champion => champion.thirdPlayerBanConnection,
        {primary: true}
    )
    @JoinColumn({name: "third_ban_id"})
    thirdBanConnection: Promise<ChampionModel>;
}

@injectable()
export class UserEscalationRepo implements RepoI{
    repo: Repository<any> = getRepository(UserEscalationModel);
};

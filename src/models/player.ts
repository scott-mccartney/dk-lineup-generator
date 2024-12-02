export type Player = {
    id: string;
    name: string;
    position: string;
    rosterPosition: string;
    salary: number;
    game: string;
    teamAbbr: string;
    averagePointsPerGame: number;
}

export const mapToPlayer = (data: any): Player => {
    return {
        id: data['ID'],
        name: data['Name'],
        position: data['Position'],
        rosterPosition: data['Roster Position'],
        salary: +data['Salary'],
        game: data['Game Info'],
        teamAbbr: data['TeamAbbrev'],
        averagePointsPerGame: +data['AvgPointsPerGame']
    }
}
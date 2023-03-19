export default interface IWorkdata {
    key: number;
    text: string;
    date: string;
}

export const workdata: IWorkdata[] = [
    {
        key: 1,
        text: 'Työharjoittelu(ICT) - KNX IoT/Project manager/Lead programmer',
        date: '-Lokkit Oy, 29/03/2022-17/03/2023'
    },
    {
        key: 2,
        text: '(Kieli) Työharjoittelu',
        date: '-Vantaa Kaupunki/Tiedonjyvän Päiväkoti, 26/8-04/10/2019'
    },
    {
        key: 3,
        text: 'Taitelija/Artist',
        date: '-Entrepeneur/Self-Employed, 31/07/2011-2018'
    },
    {
        key: 4,
        text: 'Au pair/Nanny',
        date: '-Sara Ludena (Employer), 04/01/2014-06/06/2017'
    }
];
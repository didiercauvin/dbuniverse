import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDbUniverseService implements InMemoryDbService {
    
    createDb() {
        const charactersdb = this.getDbCharacters();
        const charactersdbz = this.getDbzCharacters();
        const booksdb = this.getDbBooks();
        const booksdbz = this.getDbzBooks();

        return {
            charactersdb,
            charactersdbz,
            booksdb,
            booksdbz
         };
    }

    getDbCharacters() {
        return [
            {
                "id": 1,
                "category": "db",
                "imageUrl": "http://vignette1.wikia.nocookie.net/joke-battles/images/f/f2/Yamcha_render_by_anthonyjmo-d9tmtfh.png/revision/latest?cb=20160909123653",
                "name": "Yamcha",
                "description": "Yamcha est un redoutable guerrier capable de terrasser les adversaires les plus terribles grâce à sa technique dévastatrice : la botte secrète du loup. Accompagné de son acolyte Pual, il parcourt le désert à la recherche de voyageurs à détrousser.\nCe jeune homme particulièrement séduisant souffre cependant d'une timidité maladive qui lui fait perdre tous ses moyens dès qu'il se trouve en face d'une fille.\nIl abandonnera sa vie de bandit du désert pour accompagner Goku et vaincre sa peur de la gent féminine.\nIl décidera ensuite d'aller en ville parfaire ses techniques de combat et il participera même au Championnat du Monde des arts martiaux."
            },
            {
                "id": 2,
                "category": "db",
                "imageUrl": "http://vignette1.wikia.nocookie.net/3__/images/8/8d/Goku2.jpg.png/revision/latest?cb=20140917091017&path-prefix=300-heroes",
                "name": "Songoku",
                "description": "Goku est un jeune garçon au cœur pur doté d’une queue de singe et d’une force extraordinaire.\nSeule petite ombre au tableau : il a tendance à se transformer en gorille géant lorsqu’il regarde la pleine lune.\nGoku ne se sépare jamais du bâton que lui a laissé son grand-père adoptif, Gohan, et qui a le pouvoir de changer de taille sur commande. Sa panoplie va s’étoffer par la suite avec le nuage magique offert par Tortue Géniale, qui lui permettra de parcourir des distances formidables en un rien de temps.\nAu fil de ses aventures, Goku va gagner en expérience pour devenir le plus puissant guerrier de la terre.\nIl apprendra notamment à maîtriser à la perfection la technique du Kamehameha, qui permet de concentrer sa force intérieure pour propulser des boules d’énergie destructrices."
            },
        ];
    }

    getDbBooks() {
        return [
            {
                "id": 1,
                "category": "db",
                "title": "Tome 1",
                "imageUrl": "http://www.glenatmanga.com/img/cata/02couv/9782723434621-G.jpg",
                "description": ""
            },
            {
                "id": 2,
                "category": "db",
                "title": "Tome 2",
                "imageUrl": "http://www.glenatmanga.com/img/cata/02couv/9782723434638-G.jpg",
                "description": ""
            }
        ];
    }

    getDbzCharacters() {
        return [
            {
                "id": 1,
                "category": "dbz",
                "imageUrl": "http://vignette1.wikia.nocookie.net/villains/images/e/e3/Scouter_vegeta.png/revision/latest?cb=20130802141754",
                "name": "Vegeta",
                "description": "Vegeta est un Saïyen de sang royal. Il est le fils du Roi Vegeta qui régnait sur la planète du même nom avant que celle-ci ne soit détruite par Freezer.\nIl débarque sur Terre avec Nappa après la défaite de Raditz avec la ferme intention de se débarrasser de Goku et de s’emparer des Dragon Ball.\nFier et ombrageux, il sera le rival incessant de Goku, mais aussi un de ses plus proches compagnons.\nContre toute attente, il se rapprochera plus tard de Bulma avec qui il aura un fils, Trunks, puis une fille, Bra.\n"
            }
        ];
    }

    getDbzBooks() {
        return [
            {
                "id": 1,
                "category": "dbz",
                "title": "Tome 41",
                "imageUrl": "http://www.glenatmanga.com/img/cata/02couv/9782723449380-G.jpg",
                "description": ""
            },
            {
                "id": 2,
                "category": "dbz",
                "title": "Tome 23",
                "imageUrl": "http://www.glenatmanga.com/img/cata/02couv/9782723449205-G.jpg",
                "description": ""
            }
        ];
    }
}
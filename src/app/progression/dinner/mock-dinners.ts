import { Category, Dinner } from './dinner'

export const DINNERS: Dinner[] = [
    { id: -5, name: "Improvisieren", ingrediences: ["(spez.)"], categories: [Category.misc] },
    { id: -4, name: "Reste", ingrediences: [], categories: [Category.misc] },
    { id: -3, name: "Reste", ingrediences: [], categories: [Category.misc] },
    { id: -2, name: "Auswärts Essen", ingrediences: [], categories: [Category.misc] },
    { id: -1, name: "Auswärts Essen", ingrediences: [], categories: [Category.misc] },
    { id: 0, name: "Kaiserschmarrn", ingrediences: ["Eier", "Butter", "Milch", "Mehl", "Zucker"], categories: [Category.sweet] },
    { id: 1, name: "Kartoffelpuffer", ingrediences: ["Kartoffeln", "Eier"], categories: [Category.sweet, Category.potatoes] },
    { id: 2, name: "Dampfnudeln", ingrediences: ["Butter", "Eier"], categories: [Category.sweet] },
    { id: 3, name: "Waffeln", ingrediences: ["Milch", "Eier", "Butter"], categories: [Category.sweet] },
    { id: 4, name: "Milchreis", ingrediences: ["Milch"], categories: [Category.sweet, Category.rice] },
    { id: 5, name: "Pancakes", ingrediences: ["Milch", "Eier", "Butter"], categories: [Category.sweet] },
    { id: 6, name: "Pfannkuchen", ingrediences: ["Milch", "Eier", "Butter"], categories: [Category.sweet] },
    { id: 7, name: "Curryreis mit Hühn. & Erbsen", ingrediences: ["Hühnchen-Geschnetzeltes", "Langkornreis"], categories: [Category.meat, Category.rice, Category.vegetables] },
    { id: 8, name: "Schnitzel & Pommes", ingrediences: ["Schnitzel", "Kartoffeln"], categories: [Category.meat] },
    { id: 10, name: "Cordon-Bleu", ingrediences: ["Paniermehl", "Schnitzel", "Kochschinken", "Käse"], categories: [Category.meat] },
    { id: 12, name: "Hähnchen", ingrediences: ["Hähnchen"], categories: [Category.meat] },
    { id: 14, name: "Heringsalat", ingrediences: ["Schmand", "Joghurt", "Saure Gurken", "Äpfel", "Matjes-Filets"], categories: [Category.fish, Category.vegetables] },
    { id: 15, name: "Lachs mit Weinsoße", ingrediences: ["Lachs-Filet", "Wein"], categories: [Category.fish] },
    { id: 16, name: "Gebackenes Huhn (Chin.)", ingrediences: ["Hühnchen"], categories: [Category.meat] },
    { id: 17, name: "Medaillions in Paprika-Sahne-Soße & Nudeln", ingrediences: ["Sahne", "Schweinelende", "Champignons", "Nudeln"], categories: [Category.meat, Category.noodles] },
    { id: 18, name: "Geschnetzeltes", ingrediences: ["Hühnchen-Geschnetzeltes", "Zwiebeln", "Sahne", "Langkornreis"], categories: [Category.meat, Category.rice] },
    { id: 19, name: "Hühnerbrust mit Reis & Soße", ingrediences: ["Hähnerbrust", "Langkornreis", "(spez.)"], categories: [Category.meat, Category.rice] },
    { id: 20, name: "Nudeln+Schinken-Käse-Gratin", ingrediences: ["Nudeln", "Kochschinken", "Käse", "Sahne"], categories: [Category.noodles, Category.meat] },
    { id: 21, name: "Nudelauflauf", ingrediences: ["Nudeln", "Brokoli", "Käse", "(spez.)"], categories: [Category.noodles] },
    { id: 22, name: "Nudeln mit Soße", ingrediences: ["Nudeln", "Pesto"], categories: [Category.noodles] },
    { id: 23, name: "Nudeln mit Schinken-Sahne-Soße", ingrediences: ["Nudeln", "Sahne", "Zwiebeln", "Wein", "Kochschinken", "Parmesan"], categories: [Category.noodles] },
    { id: 24, name: "Gnocchi", ingrediences: [], categories: [Category.noodles] },
    { id: 25, name: "Schupfnudeln", ingrediences: [], categories: [Category.noodles] },
    { id: 27, name: "Kartoffelsuppe", ingrediences: ["Kartoffeln", "Karotten", "Zwiebeln", "Sahne", "Schinkenwärfel", "Würstchen"], categories: [Category.potatoes] },
    { id: 28, name: "Schupfnudeln-Bohnen-Pfanne", ingrediences: ["Schupfnudeln", "Bohnen", "Schinken", "Sahne"], categories: [Category.noodles, Category.vegetables] },
    { id: 29, name: "Spargel & Kartoffeln", ingrediences: ["Spargel", "Kartoffeln", "Soße-Holondaeize", "Kochschinken"], categories: [Category.potatoes, Category.vegetables] },
    { id: 30, name: "Gefüllte Brötchen", ingrediences: ["Hackfleisch", "Pilze", "Mais", "Tostbrot", "Käse"], categories: [Category.bread, Category.meat, Category.fastfood] },
    { id: 31, name: "Pizza", ingrediences: ["Salami", "Käse", "Schinken", "Mais", "(spez.)"], categories: [Category.fastfood] },
    { id: 32, name: "Wraps", ingrediences: ["Wraps", "Creme Fraiche", "(spez.)"], categories: [Category.fastfood] },
    { id: 33, name: "Flammkuchen", ingrediences: ["Schinkenwürfel", "Creme Fraiche", "Zwiebeln", "Pilze"], categories: [Category.fastfood] },
    { id: 34, name: "Pizzakuchen", ingrediences: ["Salami", "Käse", "Schinken", "Mais", "(spez.)"], categories: [Category.fastfood] },
    { id: 35, name: "Frühlingsrollen", ingrediences: ["Karotten", "Weißkohl", "Mungobohnensprossen", "Bambussprossen", "Sesamöl"], categories: [Category.vegetables] },
    { id: 36, name: "Mini-Hotdogs", ingrediences: ["Gouda-Stück", "Miniwürstchen"], categories: [Category.fastfood, Category.meat] },
    { id: 37, name: "Brotzeit", ingrediences: ["(spez.)"], categories: [Category.fastfood] },
    { id: 38, name: "Salattorte", ingrediences: ["Salatkopf", "Tomaten", "Käse", "Gurke", "Karotte", "Paprika", "Sahne", "Senf", "Knoblauch"], categories: [Category.vegetables] },
    { id: 39, name: "Knoblauchsuppe", ingrediences: ["Knoblauch", "Zwiebeln", "Weißwein", "Sahne", "Fleischbrühe"], categories: [Category.vegetables] },
    { id: 40, name: "Salat (Huhn, Croutons etc.)", ingrediences: ["Salatkopf", "Tomaten", "Käse", "Gurke", "Karotte", "Paprika", "Sahne", "Senf", "Knoblauch", "Pilze", "Hühnchengeschnetzeltes", "Toast"], categories: [Category.vegetables] },
    { id: 41, name: "Raclette", ingrediences: ["(spez.)"], categories: [Category.vegetables, Category.meat] },
    { id: 42, name: "Kuppelnudeln mit Hack & Käse", ingrediences: ["Nudeln", "Hackfleisch", "Käse", "Passierte Tomaten", "Tomatenmark"], categories: [Category.noodles, Category.meat] },
    { id: 43, name: "Hühnerfrikasee mit Reis", ingrediences: ["Hühnchen", "Suppengrün", "Butter", "Sahne", "Eier", "Weißwein"], categories: [Category.rice, Category.meat] },
    { id: 44, name: "Spinat, Kartoffeln & Ei", ingrediences: ["Spinat", "Kartoffeln", "Ei"], categories: [Category.vegetables, Category.potatoes] },
    { id: 45, name: "Hamburger", ingrediences: ["Hackfleisch", "Saure Gurken", "Tomaten", "Salat", "Gurke", "Käse"], categories: [Category.meat, Category.fastfood] },
    { id: 46, name: "Kürbiscremesuppe", ingrediences: ["Kürbis", "Kartoffeln", "Karotten", "Zwiebeln", "Sahne"], categories: [Category.vegetables] },
    { id: 47, name: "(Oli's) Nudeln mit Erbsen & Creme Fraiche", ingrediences: ["Nudeln", "Erbsen", "Creme Fraiche", "Zitrone"], categories: [Category.noodles, Category.vegetables] },
    { id: 48, name: "Sushi", ingrediences: ["Lachs", "Thunfisch", "Gurke", "Karotte", "Mais", "Pilze", "Fleisch"], categories: [Category.rice, Category.fish, Category.vegetables] },
    { id: 49, name: "Onigiri", ingrediences: ["(Spez.)"], categories: [Category.rice, Category.fish, Category.vegetables] },
    { id: 50, name: "Lachsnudeln", ingrediences: ["Lachs", "Nudeln", "Sahne"], categories: [Category.noodles, Category.fish] }
]
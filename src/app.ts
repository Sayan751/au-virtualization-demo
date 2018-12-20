import { Person } from "./Person";

const fNames = ["Ford", "Arthur", "Trillian", "Sneezy", "Sleepy", "Dopey", "Doc", "Happy", "Bashful", "Grumpy", "Mufasa", "Sarabi", "Simba", "Nala", "Kiara", "Kovu", "Timon", "Pumbaa", "Rafiki", "Shenzi"];
const lNames = ["Prefect", "Dent", "Astra", "Adams", "Baker", "Clark", "Davis", "Evans", "Frank", "Ghosh", "Hills", "Irwin", "Jones", "Klein", "Lopez", "Mason", "Nalty", "Ochoa", "Patel", "Quinn", "Reily", "Smith", "Trott", "Usman", "Valdo", "White", "Xiang", "Yakub", "Zafar"];
export class App {
    private people: Person[];

    constructor() {
        this.people = [
            { fname: fNames[0], lname: lNames[0] },
            { fname: fNames[1], lname: lNames[1] },
            { fname: fNames[2], lname: lNames[2] }
        ];
        this.push30();
    }

    public push30 = (scrollContext?: any) => {
        if (scrollContext) {
            console.log("getting more:", JSON.stringify(scrollContext, undefined, 2))
        }
        if (!scrollContext || scrollContext.isAtBottom) {
            for (let i = 0; i < 30; i++) {
                this.people.push({
                    fname: fNames[Math.floor(Math.random() * fNames.length)],
                    lname: lNames[Math.floor(Math.random() * lNames.length)]
                });
            }
        }
        console.log("Population size:", this.people.length);
    }
}
export type Question = {
  id: string;
  max: number;
  items: string[];
};

export default interface ISteps {
  id: number;
  title: string;
  desc: string[];
  questions: Question[];
}

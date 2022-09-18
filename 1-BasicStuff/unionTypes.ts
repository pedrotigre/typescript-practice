let hightScore: number | boolean;
hightScore = 2;
hightScore = false;

const stuff: number[] | string[] = [];

type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: 'ski' | 'snowboard';
  level: SkillLevel;
};

type RGB = { r: number; g: number; b: number };
type HSL = { h: number; s: number; l: number };

const colors: (RGB | HSL)[] = [];

function greet(name: string | string[]): void {
  if (typeof name === 'string') {
    console.log(`Hello, ${name}`);
  } else {
    name.forEach((name) => {
      console.log(`Hello, ${name}`);
    });
  }
}

greet('Pedro');
greet(['Lucas', 'Gabriel', 'Jose']);

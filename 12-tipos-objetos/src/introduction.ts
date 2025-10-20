// introduction.ts

// Interfaces são usadas para definir contratos claros para objetos
// Diferente de type, não precisam de "=" e aceitam apenas objetos
// Permitem herança, propriedades opcionais e são ideais para APIs e estruturas complexas

// Interface básica Run
interface Run {
  miles: number;
}

// Função que recebe um objeto Run
function updateRunGoal(run: Run) {
  console.log(`
    Miles left:       ${50 - run.miles}
    Percent of goal:  ${(run.miles / 50) * 100}% complete
  `);
}

// Chamando a função com um objeto válido
updateRunGoal({ miles: 5 });

// Exemplo com propriedades opcionais
interface DetailedRun {
  miles: number;
  date: string;
  location?: string;
  pace?: number;
}

function logRun(run: DetailedRun) {
  console.log(`Run on ${run.date}: ${run.miles} miles`);
  if (run.location) console.log(`Location: ${run.location}`);
  if (run.pace) console.log(`Pace: ${run.pace} min/km`);
}

logRun({ miles: 7, date: '2025-10-18', location: 'Park', pace: 5.2 });

// Interface estendida
interface GoalRun extends Run {
  goal: number;
}

function updateGoalProgress(run: GoalRun) {
  const percent = (run.miles / run.goal) * 100;
  console.log(
    `Progress: ${percent.toFixed(2)}% of goal (${run.miles}/${run.goal})`
  );
}

updateGoalProgress({ miles: 12, goal: 20 });

// Objeto complexo usando interface
interface Runner {
  name: string;
  age: number;
  weeklyRuns: Run[];
}

const alice: Runner = {
  name: 'Alice',
  age: 28,
  weeklyRuns: [{ miles: 5 }, { miles: 7 }, { miles: 3 }],
};

function weeklyMileage(runner: Runner): number {
  return runner.weeklyRuns.reduce((total, run) => total + run.miles, 0);
}

console.log(`Total weekly miles for ${alice.name}: ${weeklyMileage(alice)}`);

# TP Memory

## Explications

Ce projet utilise ViteJS, comme décrit ci-dessous.

Plusieurs branches ont été créées :

Etape 1 :
Création des composants de base, dans logique.

Etape 2 :
Ajoute de la logique de base du jeu et mise a jour de Card pour acceuillir cette logique.

Etape 3 :
Ajout d'un système pour recommencer le jeu

Etape 4 :
Création d'un custom hook pour isoler la logique du composant Game, permettant une meilleure abstraction. Amélioration de ce custom hook pour pouvoir jouer avec n'importe quel deck de cartes (différentes mais aussi plus nombreuses)

Voici les consignes pour chaque étape :

Etape 1 :

Créer un dossier components et y créer des dossiers Header, Game et Footer.

Les dossiers Header et Footer vont accueillir les composants du même nom.

Le dossier Game va accueillir le composant Game mais aussi le composant Card, qui n'est utilisé que dans Game.

Etape 2 :
Il faut permettre de cliquer sur les cards, qui ne doivent pas être visible initialement. On doit pouvoir retourner au maximum 2 cartes et lorsque 2 cartes ont été cliqué, il faut analyser si elles sont identiques.

Tips : Pour réussir cette étape, il peut être intéressant de décomposer les étapes du jeu en faisant vraiment le jeu en format papier et en essayant d'isoler des actions de jeu.

Etape 3 :
Ajouter un gameover et un boutton permettant de revenir au début du jeu

Etape 4 :
Créer un dossier hooks, y créer un hook useMemory dans useMemory.tsx.
Vous pouvez aussi ajouter un dossier utils et un dossier types pour isoler ces élements si nécessaires.

Une fois que le hook est créer, vous pouvez essayer de faire en sorte que ce hook prenne en paramètre quelques cartes (3 par exemple) pour créer un deck de 6 cartes mélangées.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

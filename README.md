# ZLAWYER - Export du site

## Commandes pour exporter le site

### 1. Vérifier la configuration
Assurez-vous que dans `nuxt.config.ts`, la ligne suivante est bien présente :
```typescript
baseURL: '/logiciel-avocats/',
```

### 2. Générer le site statique
```bash
yarn generate
```

### 3. Résultat
Le site sera généré dans le dossier `static/` et prêt à être déployé.

## Commandes utiles

- **Développement** : `yarn dev`
- **Build** : `yarn build`
- **Génération statique** : `yarn generate`
- **Prévisualisation** : `yarn preview`

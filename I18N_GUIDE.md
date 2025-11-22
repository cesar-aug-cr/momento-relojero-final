# Guía de Internacionalización / Internationalization Guide

## 🇪🇸 Español es el idioma predeterminado / Spanish is the default language

Este sitio web está diseñado con **Español como idioma principal**. Los idiomas inglés y francés son traducciones del contenido español original.

This website is designed with **Spanish as the primary language**. English and French are translations of the original Spanish content.

---

## Estructura de Idiomas / Language Structure

### Idiomas Soportados / Supported Languages

1. **🇪🇸 Español (Predeterminado)** - Spanish (Default)
2. **🇬🇧 English** - Traducción del español / Translation from Spanish
3. **🇫🇷 Français** - Traduction de l'espagnol / Translation from Spanish

---

## Archivos de Traducción / Translation Files

Todos los archivos de traducción se encuentran en: / All translation files are located in:
```
src/i18n/locales/
├── es.json  ← Idioma fuente / Source language
├── en.json  ← Traducción / Translation
└── fr.json  ← Traducción / Translation
```

### Jerarquía de Traducción / Translation Hierarchy

```
Español (Fuente) → English (Traducción)
                 → Français (Traduction)
```

---

## Cómo Usar / How to Use

### En el Código / In Code

```typescript
import { getDictionary } from '@/i18n/get-dictionary';

// Español por defecto / Spanish by default
const dict = await getDictionary('es');

// Traducciones / Translations
const dictEN = await getDictionary('en');
const dictFR = await getDictionary('fr');
```

### Selector de Idioma / Language Selector

El selector de idioma muestra:
- 🇪🇸 con "Predeterminado" para Español
- 🇬🇧 para English
- 🇫🇷 para Français

---

## Agregar Nuevas Traducciones / Adding New Translations

1. **Primero en Español** / First in Spanish:
   ```json
   // es.json
   {
     "nueva_seccion": {
       "titulo": "Mi Título en Español"
     }
   }
   ```

2. **Luego traducir** / Then translate:
   ```json
   // en.json
   {
     "nueva_seccion": {
       "titulo": "My Title in English"
     }
   }

   // fr.json
   {
     "nueva_seccion": {
       "titulo": "Mon Titre en Français"
     }
   }
   ```

---

## Configuración / Configuration

- **Idioma predeterminado**: `es` (Español)
- **Idiomas disponibles**: `['es', 'en', 'fr']`
- **Detección automática**: Deshabilitada (siempre español por defecto)

---

## Notas Importantes / Important Notes

⚠️ **Español es la fuente de verdad** - Todas las traducciones deben basarse en el contenido español original.

⚠️ **Spanish is the source of truth** - All translations should be based on the original Spanish content.

⚠️ **L'espagnol est la source de vérité** - Toutes les traductions doivent être basées sur le contenu espagnol original.

# Contribuyendo a RataCueva 🚀

## 👋 Bienvenido al equipo

¡Gracias por tu interés en contribuir a *RataCueva*!  
Este documento contiene todas las políticas y procedimientos necesarios para colaborar en el desarrollo del proyecto.

---

## 🔄 Políticas y procedimientos de merge/integración

### 📋 Flujo de trabajo: GitHub Flow

Seguimos el *GitHub Flow* como metodología principal de desarrollo:

1. *Crear una rama* desde main para cada nueva feature/fix
2. *Hacer commits* con mensajes descriptivos
3. *Abrir un Pull Request* para iniciar la discusión
4. *Revisar y discutir* el código con el equipo
5. *Mergear* una vez aprobado
6. *Deployar* automáticamente

### 🌿 Nomenclatura de ramas

Utilizamos las siguientes convenciones para nombrar nuestras ramas:

| Tipo | Prefijo | Descripción | Ejemplo |
|------|---------|-------------|---------|
| *Feature* | feature/ | Nuevas funcionalidades | feature/user-authentication |
| *Bugfix* | bugfix/ | Corrección de errores | bugfix/login-validation |
| *Hotfix* | hotfix/ | Correcciones urgentes | hotfix/security-patch |
| *Refactor* | refactor/ | Mejoras de código | refactor/database-connection |
| *Chore* | chore/ | Tareas de mantenimiento | chore/update-dependencies |
| *Documentation* | docs/ | Actualización de documentación | docs/api-endpoints |

### 📋 Flujo de trabajo para desarrolladores

#### 1. *Creación de ramas*
bash
# Ejemplo de creación de rama feature
git checkout main
git pull origin main
git checkout -b feature/nombre-descriptivo

# Ejemplo de creación de rama bugfix
git checkout -b bugfix/descripcion-problema


#### 2. *Preparación del código*
- Asegúrate de que tu código esté actualizado con la rama principal (main)
- Ejecuta todas las pruebas locales antes de solicitar un merge
- Verifica que el código cumpla con los estándares de calidad del proyecto
- Sigue las convenciones de nomenclatura establecidas

#### 3. *Creación de Pull Request (PR)*
- Crea una rama descriptiva siguiendo la nomenclatura establecida
- Realiza commits con mensajes claros y descriptivos
- Incluye una descripción detallada del PR explicando:
  - Qué cambios se realizaron
  - Por qué se necesitan estos cambios
  - Cómo probar los cambios
  - Cualquier breaking change o consideración importante

#### 4. *Requisitos para aprobación*
- ✅ *Código revisado*: Al menos 2 aprobaciones de miembros del equipo
- ✅ *Pruebas pasando*: Todas las pruebas automatizadas deben pasar
- ✅ *Sin conflictos*: El código debe poder mergearse sin conflictos
- ✅ *Documentación actualizada*: Actualiza la documentación si es necesario
- ✅ *Estándares de código*: Cumple con las convenciones del proyecto
- ✅ *Nomenclatura correcta*: La rama sigue las convenciones establecidas

#### 5. *Proceso de review*
- Los reviewers deben revisar el código dentro de 48 horas
- Proporciona feedback constructivo y específico
- Si hay cambios solicitados, el autor debe responder y actualizar el PR
- Una vez aprobado, el PR puede ser mergeado

#### 6. *Merge strategy*
- *Squash and Merge*: Para features completas
- *Rebase and Merge*: Para commits individuales bien estructurados
- *Merge Commit*: Solo en casos especiales aprobados por el equipo

### 🚨 Reglas Importantes

#### *Antes del merge:*
- No merges directos a main sin PR
- No merges de código que no compile
- No merges sin pruebas automatizadas
- No merges que rompan la funcionalidad existente
- *Obligatorio*: Usar la nomenclatura de ramas establecida

#### *Después del merge:*
- Elimina la rama feature después del merge exitoso
- Verifica que el deployment automático funcione correctamente
- Notifica al equipo si hay cambios que requieren atención especial

### 📞 Contacto y soporte

Para dudas sobre el proceso de merge o integración:
- Abre un issue en el repositorio
- Contacta al equipo de desarrollo
- Revisa la documentación técnica del proyecto

---

## ⭐ Equipo de desarrollo

1. Jorge Christian Serrano Puertos
2. Misrael Florentino Alatamirano
3. Erick Ernesto Lopez Valdes
4. José Eduardo Chávez Moreno
5. Alejandro Ortiz Peréz

---

> [!IMPORTANT]  
> *Nota:* Este documento debe ser revisado y actualizado regularmente para mantener las mejores prácticas del equipo.
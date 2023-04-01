#!/bin/bash

RED='\033[0;31m'
GREEN='\033[1;32m'
CYAN='\033[1;36m'
NC='\033[0m'

echo -e "${CYAN}========================="
echo "T3 Stack Expansion"
echo "========================="
echo -e "${NC}"

#region  //*=========== Install Packages ===========
echo -e "${NC}"
echo -e "${GREEN}[Step 1] Installing additional packages${NC}"
echo ""
echo -e "Packages: ${GREEN} next-auth prisma react-query superjson tRPC zod"
echo -e "${NC}"
yarn add @next-auth/prisma-adapter @prisma/client @trpc/server @trpc/next @trpc/react-query @trpc/client @tanstack/react-query next-auth superjson zod
yarn add -D prisma
# endregion  //*======== Install Packages ===========

#region  //*=========== Create Directories ===========
mkdir -p prisma
mkdir -p src/pages/api/auth
mkdir -p src/pages/api/trpc
mkdir -p src/server
mkdir -p src/utils
#endregion  //*======== Create Directories ===========

#region  //*=========== Downloading Files ===========
echo ""
echo -e "${GREEN}[Step 2] Downloading files${NC}"
echo ""

DIRNAME="tRPC"

files=(
  "prisma/schema.prisma"
  "src/pages/api/auth/[...nextauth].ts"
  "src/pages/api/trpc/[trpc].ts"
  "src/pages/app-trpc.tsx"
  "src/server/api/routers/example.ts"
  "src/server/api/root.ts"
  "src/server/api/trpc.ts"
  "src/server/auth.ts"
  "src/server/db.ts"
  "src/utils/api.ts"
  "src/env.mjs"
)
for i in "${files[@]}"
do
  echo "Downloading... $i"
  curl -LJs -o $i https://raw.githubusercontent.com/mrevanzak/expansion-pack/main/$DIRNAME/$i
done

#region  //*=========== Editing .env.example ===========
echo '
# Prisma
# https://www.prisma.io/docs/reference/database-reference/connection-urls#env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"

# Next Auth
# You can generate a new secret on the command line with:
# openssl rand -base64 32
# https://next-auth.js.org/configuration/options#secret
# NEXTAUTH_SECRET=""
NEXTAUTH_URL="http://localhost:3000"
' >> .env.example
#endregion  //*======== Editing .env.example ===========

echo ""
echo -e "${CYAN}============================================"
echo "🔋 T3 Stack Expansion Completed"
echo -e "${RED}REQUIRED ACTIONS${NC}"
echo -e "1. Move 'src/pages/app-trpc.tsx' to the '_app.tsx' manually to avoid conflicts${NC}"
echo -e "2. Check 'src/env.mjs' for environment variables${NC}"

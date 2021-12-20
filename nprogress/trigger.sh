#!/bin/bash

RED='\033[0;31m'
GREEN='\033[1;32m'
CYAN='\033[1;36m'
NC='\033[0m'

echo -e "${CYAN}========================="
echo "NProgress Expansion"
echo "========================="
echo -e "${NC}"

#region  //*=========== Install Packages ===========
echo -e "${NC}"
echo -e "${GREEN}[Step 1] Installing additional packages${NC}"
echo ""
echo -e "Packages: ${GREEN}nprogress"
echo -e "${NC}"
yarn add nprogress

echo -e "Installing Dev Packages: ${GREEN}@types/nprogress"
echo -e "${NC}"
yarn add -D @types/nprogress
# endregion  //*======== Install Packages ===========

#region  //*=========== Downloading Files ===========
echo ""
echo -e "${GREEN}[Step 2] Downloading files${NC}"
echo ""

DIRNAME="nprogress"

files=(
  "src/pages/Nprogress-_app.tsx"
  "src/styles/nprogress.css"
)
for i in "${files[@]}"
do
  echo "Downloading... $i"
  curl -LJs -o $i https://raw.githubusercontent.com/theodorusclarence/expansion-pack/main/$DIRNAME/$i
done
#endregion  //*======== Downloading Files ===========


echo ""
echo -e "${CYAN}============================================"
echo "🔋 NProgress Expansion Completed"
echo -e "${RED}REQUIRED ACTIONS${NC} move 'src/pages/Nprogress-_app.tsx' to the '_app.tsx' component manually to avoid conflicts${CYAN}"


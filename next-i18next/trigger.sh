#!/bin/bash

RED='\033[0;31m'
GREEN='\033[1;32m'
CYAN='\033[1;36m'
NC='\033[0m'


echo -e "${CYAN}========================="
echo "next-i18next Expansion"
echo "========================="
echo -e "${NC}"

#region  //*=========== Install Packages ===========
echo -e "${NC}"
echo -e "${GREEN}[Step 1] Installing additional packages${NC}"
echo ""
echo -e "Packages: ${GREEN}next-i18next"
echo -e "${NC}"
yarn add next-i18next
# endregion  //*======== Install Packages ===========

#region  //*=========== Downloading Files ===========
echo ""
echo -e "${GREEN}[Step 2] Downloading files${NC}"
echo ""

DIRNAME="next-i18next"

files=(
  "public/locales/en/common.json",
  "public/locales/id/common.json",
  "src/pages/next-i18next-_app.tsx",
  "src/pages/next-i18next-example.tsx",
  "next-i18next.config.js",
  "next.config.js"
)

for i in "${files[@]}"
do
  echo "Downloading... $i"
  curl -LJs -o $i ./$DIRNAME/$i
done
#endregion  //*======== Downloading Files ===========

echo ""
echo -e "${CYAN}============================================"
echo "🔋 next-i18next Expansion Completed"
echo -e "${RED}REQUIRED ACTIONS${NC} move 'src/pages/next-i18next-_app.tsx' to the '_app.tsx' component manually to avoid conflicts${CYAN}"


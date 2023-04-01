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
yarn add next-i18next i18next react-i18next
# endregion  //*======== Install Packages ===========

#region  //*=========== Create Directories ===========
mkdir -p public/locales/en
mkdir -p public/locales/id
#endregion  //*======== Create Directories ===========

#region  //*=========== Downloading Files ===========
echo ""
echo -e "${GREEN}[Step 2] Downloading files${NC}"
echo ""

DIRNAME="next-i18next"

files=(
  "src/pages/next-i18next-_app.tsx"
  "src/pages/next-i18next-example.tsx"
  "public/locales/en/common.json"
  "public/locales/id/common.json"
  "next-i18next.config.js"
  "next.config.expansion.js"
)

for i in "${files[@]}"
do
  echo "Downloading... $i"
  curl -LJs -o $i https://raw.githubusercontent.com/theodorusclarence/expansion-pack/main/$DIRNAME/$i
done
#endregion  //*======== Downloading Files ===========

echo ""
echo -e "${CYAN}============================================"
echo "🔋 next-i18next Expansion Completed"
echo -e "${RED}REQUIRED ACTIONS${NC} update '_app.tsx' component with the content of 'src/pages/next-i18next-_app.tsx' manually to avoid conflicts${CYAN}"
echo -e "${RED}REQUIRED ACTIONS${NC} update main 'next.config.js' with the content of next.config.expansion.js manually to avoid conflicts${CYAN}"


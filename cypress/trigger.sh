#!/bin/bash

RED='\033[0;31m'
GREEN='\033[1;32m'
CYAN='\033[1;36m'
NC='\033[0m'

echo -e "${CYAN}========================="
echo "Cypress Expansion"
echo "========================="
echo -e "${NC}"

#region  //*=========== Install Packages ===========
echo -e "${NC}"
echo -e "${GREEN}[Step 1] Installing additional packages${NC}"
echo -e ""
echo -e "Dev Packages: ${GREEN}cypress local-cypress"
echo -e "${NC}"
yarn add -D cypress local-cypress

echo -e ""
echo -e "${GREEN}[Step 2] Adding scripts to package.json${NC}"
npx -y npe scripts.cy "cypress open"
npx -y npe scripts.cy:headless "cypress run"
# endregion  //*======== Install Packages ===========

#region  //*=========== Create Directories ===========
mkdir -p cypress/fixtures
mkdir -p cypress/integration/pages
mkdir -p cypress/plugins
mkdir -p cypress/support
#endregion  //*======== Create Directories ===========

#region  //*=========== Downloading Files ===========
echo ""
echo -e "${GREEN}[Step 3] Downloading files${NC}"
echo ""

DIRNAME="cypress"

files=(
  "cypress/support/index.js"
  "cypress/support/commands.js"
  "cypress/plugins/index.js"
  "cypress/integration/pages/index.spec.ts"
  "cypress/fixtures/example.json"
  "cypress.json"
  ".github/workflows/cypress.yml"
)
for i in "${files[@]}"
do
  echo "Downloading... $i"
  curl -LJs -o $i https://raw.githubusercontent.com/theodorusclarence/expansion-pack/main/$DIRNAME/$i
done
#endregion  //*======== Downloading Files ===========


echo ""
echo -e "${CYAN}============================================"
echo "🔋 Cypress Expansion Completed"
echo "Run 'yarn cy' for the first time"
echo -e "${RED}REQUIRED ACTIONS${NC} Add Cypress config to github secrets for the github actions to work${CYAN}"


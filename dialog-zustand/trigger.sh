#!/bin/bash

RED='\033[0;31m'
GREEN='\033[1;32m'
CYAN='\033[1;36m'
NC='\033[0m'

echo -e "${CYAN}========================="
echo "Dialog Zustand Expansion"
echo "========================="
echo -e "${NC}"

#region  //*=========== Install Packages ===========
echo -e "${NC}"
echo -e "${GREEN}[Step 1] Installing additional packages${NC}"
echo ""
echo -e "Packages: ${GREEN}zustand @headlessui/react immer auto-zustand-selectors-hook"
echo -e "${NC}"
yarn add zustand @headlessui/react immer auto-zustand-selectors-hook
# endregion  //*======== Install Packages ===========

#region  //*=========== Create Directories ===========
mkdir -p src/components/dialog
mkdir -p src/store
mkdir -p src/pages/sandbox
mkdir -p src/hooks
#endregion  //*======== Create Directories ===========

#region  //*=========== Downloading Files ===========
echo ""
echo -e "${GREEN}[Step 2] Downloading files${NC}"
echo ""

DIRNAME="dialog-zustand"

files=(
  "src/components/dialog/BaseDialog.tsx"
  "src/components/dialog/BaseDialog.tsx"
  "src/components/layout/DialogZustandLayout.tsx"
  "src/hooks/useDialog.tsx"
  "src/pages/sandbox/dialog-zustand.tsx"
  "src/store/useDialogStore.tsx"
)
for i in "${files[@]}"
do
  echo "Downloading... $i"
  curl -LJs -o $i https://raw.githubusercontent.com/theodorusclarence/expansion-pack/main/$DIRNAME/$i
done
#endregion  //*======== Downloading Files ===========


echo ""
echo -e "${CYAN}============================================"
echo "🔋 Dialog Zustand Expansion Completed"
echo -e "${RED}REQUIRED ACTIONS, move 'src/components/layout/DialogZustandLayout.tsx' to the 'Layout.tsx' component manually to avoid conflicts${CYAN}"
echo "Check src/pages/sandbox/dialog-zustand.tsx for example usage"


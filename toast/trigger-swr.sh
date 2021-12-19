#!/bin/bash

RED='\033[0;31m'
GREEN='\033[1;32m'
CYAN='\033[1;36m'
NC='\033[0m'

echo -e "${CYAN}========================="
echo "Toast with SWR Expansion"
echo "========================="
echo -e "${NC}"

#region  //*=========== Install Packages ===========
echo -e "${NC}"
echo -e "${GREEN}[Step 1] Installing additional packages${NC}"
echo ""
echo -e "Packages: ${GREEN}react-hot-toast swr axios"
echo -e "${NC}"
yarn add react-hot-toast swr axios
# endregion  //*======== Install Packages ===========

#region  //*=========== Create Directories ===========
mkdir -p src/components
mkdir -p src/constant
mkdir -p src/hooks/toast
mkdir -p src/lib
mkdir -p src/pages/sandbox
#endregion  //*======== Create Directories ===========

#region  //*=========== Downloading Files ===========
echo ""
echo -e "${GREEN}[Step 2] Downloading files${NC}"
echo ""

DIRNAME="toast"

files=(
  "src/components/DismissableToast.tsx"
  "src/constant/toast.ts"
  "src/hooks/toast/useLoadingToast.tsx"
  "src/hooks/toast/useSWRWithToast.tsx"
  "src/lib/axios.ts"
  "src/pages/app-swr.tsx"
  "src/pages/sandbox/toast-swr.tsx"
)
for i in "${files[@]}"
do
  echo "Downloading... $i"
  curl -LJs -o $i https://raw.githubusercontent.com/theodorusclarence/expansion-pack/main/$DIRNAME/$i
done

echo ""
echo -e "${CYAN}============================================"
echo "🔋 Toast with SWR Expansion Completed"
echo -e "${RED}REQUIRED ACTIONS${NC}"
echo -e "1. Move 'src/pages/app-swr.tsx' to the '_app.tsx' manually to avoid conflicts${NC}"
echo -e "2. Change base URL in 'src/lib/axios.ts'${CYAN}"
echo "Check src/pages/sandbox/toast-swr.tsx for example usage"

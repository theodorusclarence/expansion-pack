#!/bin/bash

RED='\033[0;31m'
GREEN='\033[1;32m'
CYAN='\033[1;36m'
NC='\033[0m'

echo -e "${CYAN}========================="
echo "React Hook Form Expansion"
echo "========================="
echo -e "${NC}"

#region  //*=========== Install Packages ===========
echo -e "${NC}"
echo -e "${GREEN}[Step 1] Installing additional packages${NC}"
echo ""
echo -e "Packages: ${GREEN}react-hook-form react-datepicker react-dropzone react-image-lightbox"
echo -e "${NC}"
yarn add react-hook-form react-datepicker react-dropzone react-image-lightbox 
echo -e ""
echo -e "Dev Packages: ${GREEN}@types/react-datepicker"
echo -e "${NC}"
yarn add -D @types/react-datepicker 
# endregion  //*======== Install Packages ===========

#region  //*=========== Create Directories ===========
mkdir -p src/components/forms
mkdir -p src/pages/sandbox
mkdir -p src/types
#endregion  //*======== Create Directories ===========

#region  //*=========== Downloading Files ===========
echo ""
echo -e "${GREEN}[Step 2] Downloading files${NC}"
echo ""

DIRNAME="rhf"

files=(
  "src/components/forms/DatePicker.tsx"
  "src/components/forms/DropzoneInput.tsx"
  "src/components/forms/FilePreview.tsx"
  "src/components/forms/Input.tsx"
  "src/components/forms/SelectInput.tsx"
  "src/components/forms/PasswordInput.tsx"
  "src/components/forms/TextArea.tsx"
  "src/pages/sandbox/rhf.tsx"
  "src/types/dropzone.ts"
)
for i in "${files[@]}"
do
  echo "Downloading... $i"
  curl -LJs -o $i https://raw.githubusercontent.com/theodorusclarence/expansion-pack/main/$DIRNAME/$i
done

# Append datepicker css reset
echo "Appending additional css..."
curl -s https://raw.githubusercontent.com/theodorusclarence/expansion-pack/main/$DIRNAME/datepicker.css >> src/styles/globals.css
#endregion  //*======== Downloading Files ===========


echo ""
echo -e "${CYAN}============================================"
echo "🔋 React Hook Form Expansion Completed"
echo "Check src/pages/sandbox/rhf.tsx for example usage"


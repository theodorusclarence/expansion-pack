#!/bin/bash

echo "================================="
echo "Running React Hook Form Expansion"
echo "================================="
echo ""

#region  //*=========== Install Packages ===========
echo "[Step 1] Installing additional packages"
echo "Packages: react-hook-form react-datepicker react-dropzone"
yarn add react-hook-form react-datepicker react-dropzone 
# endregion  //*======== Install Packages ===========

#region  //*=========== Create Directories ===========
mkdir -p src/components/forms
mkdir -p src/pages/sandbox
mkdir -p src/types
#endregion  //*======== Create Directories ===========

#region  //*=========== Downloading Files ===========
echo "[Step 2] Downloading files"

files=(
  "src/components/forms/DatePicker.tsx"
  "src/components/forms/DropzoneInput.tsx"
  "src/components/forms/FilePreview.tsx"
  "src/components/forms/Input.tsx"
  "src/components/forms/SelectInput.tsx"
  "src/components/forms/TextArea.tsx"
  "src/pages/sandbox/rhf.tsx"
  "src/types/dropzone.ts"
)
for i in "${files[@]}"
do
  echo "Downloading... $i"
  curl -LJs -o $i https://raw.githubusercontent.com/theodorusclarence/expansion-pack/main/$i
done

# Append datepicker css reset
echo "Appending additional css..."
curl -s https://raw.githubusercontent.com/theodorusclarence/expansion-pack/main/rhf/datepicker.css >> src/styles/globals.css
#endregion  //*======== Downloading Files ===========


echo ""
echo "============================================"
echo "🔋 React Hook Form Expansion Completed"
echo "Check /src/sandbox/rhf.tsx for example usage"

#!/bin/zsh

NAME=$1
SLUG=$(echo $NAME | sed -e 's/[^[:alnum:]]/-/g' | tr -s '-' | tr A-Z a-z)
DATE=$(date "+%Y-%m-%dT%H:%m:%S-08:00")
FILE="src/pages/drinks/${SLUG}.md"

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color
if [ -f $FILE ]; then
  echo -e "${RED}Cannot create '$FILE': already exists${NC}"
  exit 1
fi

echo -e "Creating: ${GREEN}src/pages/drinks/${SLUG}.md${NC}"
sed "s/title:/title: \"${NAME}\"/" DRINK_TEMPLATE.md > ${FILE}
sed -i '' "s/path:/path: \"\/drinks\/${SLUG}\"/" $FILE
sed -i '' "s/date:/date: ${DATE}/" $FILE

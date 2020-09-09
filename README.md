# Introduction

A self needed shell utility to merge 2 or more JSON configuration files with
deep merge.

Used for dotnet core project to merge defautl appsettings.json with
appsettings.[env].json and later convert it to key-value pairs for az cli to
update.  Being lazy enough to use one off run with npx
`npx deepmerge-cli file1 file2`

# Usage

`sh deepmerge file1 file2 [file3...] `


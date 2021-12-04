say "Install esbuild with config"
copy_file "#{__dir__}/esbuild.config.js", "esbuild.config.js"
run "yarn add esbuild"

say "Add build script"
build_script = "node esbuild.config.js"

if (`npx -v`.to_f < 7.1 rescue "Missing")
  say %(Add "scripts": { "build": "#{build_script}" } to your package.json), :green
else
  run %(npm set-script build "#{build_script}")
  run %(yarn build)
end

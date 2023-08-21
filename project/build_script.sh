VERSION=$1 // build版本号
npm ci // 安装依赖
npm run build_prod  // build 生产环境 + docker build生产环境 Dockerfile + Dockerfile.k8s
docker build --build-arg UI_INSTANCE=production --build-arg CACHEBUST=$(date +%s) -t amr-registry.caas.intel.com/fia-cloud/1tas2/ui:$VERSION.n . --no-cache -f Dockerfile
docker build --build-arg UI_INSTANCE=production --build-arg CACHEBUST=$(date +%s) -t amr-registry.caas.intel.com/fia-cloud/1tas2/ui:$VERSION.k . --no-cache -f Dockerfile.k8s
npm run build_dev
docker build --build-arg UI_INSTANCE=staging --build-arg CACHEBUST=$(date +%s) -t amr-registry.caas.intel.com/fia-cloud/1tas2/ui:$VERSION.sn . --no-cache -f Dockerfile
docker build --build-arg UI_INSTANCE=staging --build-arg CACHEBUST=$(date +%s) -t amr-registry.caas.intel.com/fia-cloud/1tas2/ui:$VERSION.sk . --no-cache -f Dockerfile.k8s
echo "Production Frontend Docker Images:"
docker push amr-registry.caas.intel.com/fia-cloud/1tas2/ui:$VERSION.n // docker push 生产环境
echo "amr-registry.caas.intel.com/fia-cloud/1tas2/ui:$VERSION.n"
docker push amr-registry.caas.intel.com/fia-cloud/1tas2/ui:$VERSION.k
echo "amr-registry.caas.intel.com/fia-cloud/1tas2/ui:$VERSION.k"
echo "Staging Frontend Docker Images:"
docker push amr-registry.caas.intel.com/fia-cloud/1tas2/ui:$VERSION.sn
echo "amr-registry.caas.intel.com/fia-cloud/1tas2/ui:$VERSION.sn"
docker push amr-registry.caas.intel.com/fia-cloud/1tas2/ui:$VERSION.sk
echo "amr-registry.caas.intel.com/fia-cloud/1tas2/ui:$VERSION.sk"

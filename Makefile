# Makefile

FRONTEND_DIR=frontend
BACKEND_DIR=backend
BUILD_DIR=$(FRONTEND_DIR)/dist
TARGET_DIR=$(BACKEND_DIR)/dist

build:
	cd $(FRONTEND_DIR) && npm run build

move:
	rm -rf $(TARGET_DIR)
	mkdir -p $(TARGET_DIR)
	cp -r $(BUILD_DIR)/* $(TARGET_DIR)/

deploy: build move
	@echo "✅ Frontend built and moved to backend/public"

import os

# 配置：根目录路径（请替换为你的实际路径）
root_dir = r"D:\00.Picture\CollectPrepareForPage"  # 例如：r"D:\MyPhotos" 或 r"/home/user/photos"

# 排除的文件夹名
exclude_folders = {"China", "UnitedStates"}

# 支持的图片扩展名（可扩展）
image_extensions = {".jpg", ".jpeg", ".png"}

def rename_images_in_folder(folder_path, folder_name):
    """对指定文件夹内的图片进行重命名"""
    files = os.listdir(folder_path)
    image_files = [f for f in files if os.path.splitext(f)[1].lower() in image_extensions]

    for idx, filename in enumerate(image_files, start=1):
        old_path = os.path.join(folder_path, filename)
        ext = os.path.splitext(filename)[1]  # 保留原扩展名
        new_filename = f"{folder_name}-{idx}{ext}"
        new_path = os.path.join(folder_path, new_filename)

        # 避免重名冲突（如果新文件已存在，加后缀）
        counter = 1
        while os.path.exists(new_path):
            new_filename = f"{folder_name}-{idx}_{counter}{ext}"
            new_path = os.path.join(folder_path, new_filename)
            counter += 1

        os.rename(old_path, new_path)
        print(f"重命名: {filename} → {new_filename}")

# 主程序
for item in os.listdir(root_dir):
    item_path = os.path.join(root_dir, item)
    if os.path.isdir(item_path) and item not in exclude_folders:
        print(f"\n正在处理文件夹: {item}")
        rename_images_in_folder(item_path, item)

import os
import re

def remove_1_suffix(folder_path):
    """去除文件名中的 _1 后缀（支持多种图片格式）"""
    # 支持的图片格式
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp'}
    
    for root, dirs, files in os.walk(folder_path):
        for filename in files:
            ext = os.path.splitext(filename)[1].lower()
            if ext in image_extensions and re.search(r'_1$', os.path.splitext(filename)[0]):
                old_path = os.path.join(root, filename)
                
                # 使用正则表达式去掉 _1 后缀
                new_name = re.sub(r'_1(\.\w+)$', r'\1', filename)
                new_path = os.path.join(root, new_name)
                
                # 检查新文件名是否已存在
                if os.path.exists(new_path):
                    print(f"警告: {new_path} 已存在，跳过 {old_path}")
                else:
                    os.rename(old_path, new_path)
                    print(f"已重命名: {filename} → {new_name}")

# 使用示例
folder_path = r"D:\00.Picture\CollectPrepareForPage"
remove_1_suffix(folder_path)


print("\n✅ 所有文件夹处理完成！")
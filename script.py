import os

def create_project_structure():
    base_dir = "src"
    structure = {
        "": ["main.jsx", "App.jsx", "index.css"],
        "assets": [],
        "assets/images": [
            "hero-bg.jpg", "about-img.jpg", "service1.jpg",
            "service2.jpg", "service3.jpg", "logo.png"
        ],
        "assets/icons": [],
        "components": [
            "Header.jsx", "Footer.jsx", "Hero.jsx",
            "Services.jsx", "About.jsx", "Contact.jsx", "ServiceCard.jsx"
        ],
        "data": ["services.js"]
    }

    for folder, files in structure.items():
        folder_path = os.path.join(base_dir, folder)
        os.makedirs(folder_path, exist_ok=True)
        
        for file in files:
            file_path = os.path.join(folder_path, file)
            with open(file_path, "w") as f:
                f.write("")  # Crée un fichier vide
    
    print("Structure de projet créée avec succès.")

if __name__ == "__main__":
    create_project_structure()

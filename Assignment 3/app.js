const brandModels = {
      Apple: ["iPhone 15", "iPhone 14", "iPhone 7plus"],
      Samsung: ["Galaxy S24", "Galaxy S25", "Galaxy A54"],
      Oppo: ["Oppo A56", "Oppo A3s", "Oppo A12"]
    };

    function updateModels() {
      const brandSelect = document.getElementById('brand');
      const modelSelect = document.getElementById('model');
      const selectedBrand = brandSelect.value;

      modelSelect.innerHTML = '<option value="">--Select Model--</option>';

      if (selectedBrand && brandModels[selectedBrand]) {
        brandModels[selectedBrand].forEach(model => {
          const option = document.createElement('option');
          option.value = model;
          option.textContent = model;
          modelSelect.appendChild(option);
        });
      }
    }

    function searchPhone() {
      const brand = document.getElementById('brand').value;
      const model = document.getElementById('model').value;
      const resultDiv = document.getElementById('result');

      if (brand && model) {
        resultDiv.innerHTML = `<strong>Selected Phone:</strong> ${brand} - ${model}`;
      } else {
        resultDiv.innerHTML = `<span style="color: red;">Please select both brand and model.</span>`;
      }
    }
    
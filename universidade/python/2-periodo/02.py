import numpy as np

# Função de ativação sigmoide
def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivative(x):
    return x * (1 - x)

X = np.array([[0, 0],
              [0, 1],
              [1, 0],
              [1, 1]])

y = np.array([[0],
              [1],
              [1],
              [0]])

np.random.seed(1)

# Inicializando os pesos e os bias
weights_input_hidden = 2 * np.random.random((2, 4)) - 1 
weights_hidden_output = 2 * np.random.random((4, 1)) - 1 
bias_hidden = np.random.random((1, 4))  
bias_output = np.random.random((1, 1)) 

learning_rate = 0.5 
iterations = 20000 

# Treinamento da rede neural
for i in range(iterations):
    
    input_layer = X
    hidden_layer_input = np.dot(input_layer, weights_input_hidden) + bias_hidden
    hidden_layer_output = sigmoid(hidden_layer_input)

    output_layer_input = np.dot(hidden_layer_output, weights_hidden_output) + bias_output
    output = sigmoid(output_layer_input)

    # Calcular o erro
    output_error = y - output
    
    output_delta = output_error * sigmoid_derivative(output)

    # Calcular o erro na camada oculta
    hidden_layer_error = output_delta.dot(weights_hidden_output.T)
    hidden_layer_delta = hidden_layer_error * sigmoid_derivative(hidden_layer_output)

    # Ajustar os pesos e bias
    weights_hidden_output += hidden_layer_output.T.dot(output_delta) * learning_rate
    bias_output += np.sum(output_delta, axis=0, keepdims=True) * learning_rate
    weights_input_hidden += input_layer.T.dot(hidden_layer_delta) * learning_rate
    bias_hidden += np.sum(hidden_layer_delta, axis=0, keepdims=True) * learning_rate

print("Saída após o treinamento:")
print(output)
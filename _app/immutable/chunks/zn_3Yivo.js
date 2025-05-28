import{t as m,b as a,a as r}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as Ne,s as o,f as g,n,r as ke}from"./NgVQVlRK.js";import{n as Ae}from"./B4IyMRKX.js";import{H as p}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";/* empty css        */import"./D9bBQFLV.js";import{C as $}from"./DXp9_3zM.js";import{F as w}from"./OFUKRh55.js";import{L as Ee,I as P}from"./BhmTgGWB.js";import{P as i}from"./D8YsId2T.js";import{L as u}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        */import{P as Fe}from"./CEkRzcqJ.js";const xe={layout:"post",title:"A technical deep dive into image classification",description:"Learn all about image classification and how to integrate it into your Backrush project using TensorFlow",date:"2024-08-06T00:00:00.000Z",cover:"/images/blog/image-classification.png",timeToRead:9,author:"bradley-schofield",category:"product"};var Re=m("The transformer architecture has completely changed the language processing field of AI. Researchers have investigated using the Transformer architecture since 2020, by converting sections of images into tokens with <!> and <!>. In these cases, Transformers showed yields matching or even greater results than CNNs.",1),Se=m("Currently, Transformers are leading benchmarks on most image classification datasets, including ImageNet (<!>), CIFAR-10 (ViT-H/14), and <!> (ViT-L/16). Still, they need help with datasets containing many classes, such as CIFAR-100, which is currently topped by an <!> (CNN). Another downside to transformers is that they require significantly more data than a CNN to train.",1),ze=m("<!> were invented by Geoffrey Hinton to remedy CNN&#39;s issue of recognizing different orientations. Unlike CNNs, CapNets don&#39;t use max-pooling techniques, which may cause important details to be lost in an image. Instead, they utilize smaller groups of neurons called capsules, designed to detect specific objects and output a vector instead of a single float value. Because of this output, CapNets can understand relationships between objects better (Eyes appear above the nose, etc.…) to build up a more accurate classifier even when viewing images with different orientations.",1),De=m("Install TensorFlow and NumPy installed on your machine, then paste the following code into a file called training.py; this is a modified version of the TensorFlow image classification tutorial found <!>.",1),Le=m("Give it any name and make sure to select the <!> runtime; this should create a new function with the boilerplate included. Change directories into the freshly created function and open a code editor within it.",1),Oe=m("With the function boilerplate created, replace the <!> file with a script to load the model we just trained and run inference:",1),Ue=m("Move the <!> file that was created into the same directory as the <!> file and then change directories to that containing the <!>. This <!> is quite a small file, so store it in the function. If using larger models, upload them to Backrush Storage and then use <!> to download them to the function.",1),je=m("Now that the function has been deployed, navigate to it on the Backrush console and set the <!> and <!> environment variables to be ready for execution. Make sure to redeploy the function so these new environment variables are set.",1),Me=m("Finally, send a <!> request to the function with a JSON body that contains a file ID from the bucket like this:",1),qe=m("This demo should give you a good starting point for experimenting with AI and Backrush. Try making a more advanced version or using safe tensors instead, and if you make anything cool, do not hesitate to let us know on our <!>.",1),Ve=m("<!><!><!>",1),Ge=m("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function We(Te){Fe(Te,Ae(xe,{children:(Ie,Be)=>{var y=Ge(),b=Ne(y);i(b,{children:(t,s)=>{n();var e=a("Image classification is an exciting field of computer vision that tries to understand and label images in their entirety. It has many applications: you can integrate it into your app to automatically categorize photos, filter inappropriate content from social media feeds, or even organize your online store's product catalog.");r(t,e)},$$slots:{default:!0}});var x=o(b);i(x,{children:(t,s)=>{n();var e=a("In this article, we’ll go over how the image classification field developed and its most popular architectures and datasets. Then, we’ll run you through implementing it into your Backrush project using TensorFlow.");r(t,e)},$$slots:{default:!0}});var T=o(x);p(T,{level:1,children:(t,s)=>{n();var e=a("A brief history of image classification");r(t,e)},$$slots:{default:!0}});var I=o(T);i(I,{children:(t,s)=>{n();var e=a("Early image classification began in the 1960s and relied on simple algorithms such as nearest neighbours and linear classifiers. During this time, some of the foundations of image classification were invented, such as the Vapnik-Chervonenkis Theory (VC Theory).");r(t,e)},$$slots:{default:!0}});var C=o(I);i(C,{children:(t,s)=>{n();var e=a("In the late 1980s, researchers explored how neural networks could be used. The introduction of back-propagation made it easier to train multi-layer perceptrons (MLPs) and showed that neural networks had the potential for classification tasks. However, a lack of large datasets to train on and insufficient processing power made real-world applications impractical.");r(t,e)},$$slots:{default:!0}});var N=o(C);i(N,{children:(t,s)=>{n();var e=a("All these efforts culminated in 2012 AlexNet won the ImageNet Large Scale Visual Recognition (ILSVRC) competition. This victory highlighted the potential of Convolutional Neural Networks (CNNs) for image classification, leading to a major shift in the field.");r(t,e)},$$slots:{default:!0}});var k=o(N);i(k,{children:(t,s)=>{n();var e=a("Following AlexNet, other notable architectures emerged, including VGGNet and GoogLeNet in 2014, ResNet in 2015, and EfficientNet in 2019. Each built on AlexNet's foundation, refining and simplifying CNN architecture, which is widely used today.");r(t,e)},$$slots:{default:!0}});var A=o(k);i(A,{children:(t,s)=>{n();var e=a("Retention mechanisms and transformers, inspired by their success in natural language processing, are new trends in image classification. These models treat image patches like text tokens. Few-shot learning and transfer learning have potential to reduce the need for large datasets, making models training more efficient.");r(t,e)},$$slots:{default:!0}});var E=o(A);p(E,{level:1,children:(t,s)=>{n();var e=a("Architectures");r(t,e)},$$slots:{default:!0}});var F=o(E);i(F,{children:(t,s)=>{n();var e=a("Numerous architectures have been utilized for the task of image classification; here are a few notable ones:");r(t,e)},$$slots:{default:!0}});var R=o(F);p(R,{level:3,children:(t,s)=>{n();var e=a("Convolutional Neural Networks (CNNs)");r(t,e)},$$slots:{default:!0}});var S=o(R);i(S,{children:(t,s)=>{n();var e=a("Convolutional neural networks (CNNs) use multiple layers to process data. Convolutional layers extract important features, pooling layers simplify the data and enhance feature detection, and a fully connected layer makes the final decisions.");r(t,e)},$$slots:{default:!0}});var z=o(S);p(z,{level:3,children:(t,s)=>{n();var e=a("Transformers");r(t,e)},$$slots:{default:!0}});var D=o(z);i(D,{children:(t,s)=>{n();var e=Re(),l=o(g(e));u(l,{href:"https://arxiv.org/pdf/2010.11929",children:(h,c)=>{n();var f=a("Google's ViT");r(h,f)},$$slots:{default:!0}});var d=o(l,2);u(d,{href:"https://arxiv.org/pdf/2103.14030",children:(h,c)=>{n();var f=a("Microsoft's Swin Transformer");r(h,f)},$$slots:{default:!0}}),n(),r(t,e)},$$slots:{default:!0}});var L=o(D);i(L,{children:(t,s)=>{n();var e=Se(),l=o(g(e));u(l,{href:"https://arxiv.org/pdf/2311.05709",children:(c,f)=>{n();var _=a("OmniVec");r(c,_)},$$slots:{default:!0}});var d=o(l,2);u(d,{href:"https://cs.stanford.edu/~acoates/stl10/",children:(c,f)=>{n();var _=a("STL-10");r(c,_)},$$slots:{default:!0}});var h=o(d,2);u(h,{href:"https://arxiv.org/pdf/1905.11946",children:(c,f)=>{n();var _=a("EfficientNet");r(c,_)},$$slots:{default:!0}}),n(),r(t,e)},$$slots:{default:!0}});var O=o(L);p(O,{level:3,children:(t,s)=>{n();var e=a("Capsule Networks (CapNet)");r(t,e)},$$slots:{default:!0}});var U=o(O);i(U,{children:(t,s)=>{var e=ze(),l=g(e);u(l,{href:"https://arxiv.org/pdf/1710.09829",children:(d,h)=>{n();var c=a("CapNets");r(d,c)},$$slots:{default:!0}}),n(),r(t,e)},$$slots:{default:!0}});var j=o(U);p(j,{level:1,children:(t,s)=>{n();var e=a("Datasets");r(t,e)},$$slots:{default:!0}});var M=o(j);i(M,{children:(t,s)=>{n();var e=a("Finding data to train these architectures used to be the most challenging part of developing state-of-the-art image classification models. Now, however, there is standardized high-quality labeled data that is offered entirely free for any researchers who require it. Next, we'll cover some of the most popular datasets.");r(t,e)},$$slots:{default:!0}});var q=o(M);p(q,{level:3,children:(t,s)=>{u(t,{href:"https://www.image-net.org/",children:(e,l)=>{n();var d=a("ImageNet");r(e,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var V=o(q);i(V,{children:(t,s)=>{n();var e=a("The most well-known dataset, and perhaps the oldest one still in use, ImageNet is a collection of over 14 million labeled images built up over ten years, with over a million of those images also containing bounding box data on top of that. ImageNet is most famous for its competition, the ImageNet Large Scale Visual Recognition Challenge (ILSVRC for short), held annually from 2010 until 2017. It made waves across the industry when in 2012, AlexNet beat all other algorithms by over 10.8% using a convolutional neural network, sparking a boom in computer vision research.");r(t,e)},$$slots:{default:!0}});var G=o(V);p(G,{level:3,children:(t,s)=>{u(t,{href:"https://www.cs.toronto.edu/~kriz/cifar.html",children:(e,l)=>{n();var d=a("CIFAR-10/100");r(e,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var W=o(G);i(W,{children:(t,s)=>{n();var e=a("Released in 2009 by the Canadian Institute for Advanced Research, CIFAR-10 is now another widely used benchmark for image classification models. It is a collection of 60,000 32x32 color images, each labeled with one of 10 classes. It is a subset of the 80 Million Tiny Images subset, which was also released in 2009.");r(t,e)},$$slots:{default:!0}});var B=o(W);i(B,{children:(t,s)=>{n();var e=a("CIFAR-100 is another CIFAR dataset with 100 classes, each containing 600 images. It is also heavily used in benchmarking and training models.");r(t,e)},$$slots:{default:!0}});var H=o(B);p(H,{level:3,children:(t,s)=>{u(t,{href:"https://yann.lecun.com/exdb/mnist/",children:(e,l)=>{n();var d=a("MNIST");r(e,d)},$$slots:{default:!0}})},$$slots:{default:!0}});var K=o(H);i(K,{children:(t,s)=>{n();var e=a("Released by Yann LeCun and Corinna Cortes, MNIST is an extensive database of over 60,000 images of handwritten digits commonly used to train image classification models that power OCR technology. Each image is 28x28 pixels. MNIST's training data was taken from American Census Bureau employees, while the testing data was from American high school students.");r(t,e)},$$slots:{default:!0}});var Y=o(K);i(Y,{children:(t,s)=>{n();var e=a("MNIST used to be the hello-world dataset for Tensorflow's image classification tutorial; however, it has since been replaced with 3,700 pictures of flowers to demonstrate better how to use Tensorflow with color images.");r(t,e)},$$slots:{default:!0}});var J=o(Y);p(J,{level:1,children:(t,s)=>{n();var e=a("How to implement image classification into your app");r(t,e)},$$slots:{default:!0}});var Z=o(J);i(Z,{children:(t,s)=>{n();var e=a("To show you how you might use image classification in your application, we can create two scripts: a training script you can run on your machine and an inference script you can run as an Backrush function.");r(t,e)},$$slots:{default:!0}});var Q=o(Z);p(Q,{level:3,children:(t,s)=>{n();var e=a("Step 1: Train the TensorFlow model");r(t,e)},$$slots:{default:!0}});var X=o(Q);i(X,{children:(t,s)=>{n();var e=De(),l=o(g(e));u(l,{href:"https://www.tensorflow.org/tutorials/images/classification",children:(d,h)=>{n();var c=a("here");r(d,c)},$$slots:{default:!0}}),n(),r(t,e)},$$slots:{default:!0}});var ee=o(X);w(ee,{content:`import matplotlib.pyplot as plt
import numpy as np
import tensorflow as tf

from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.models import Sequential
import pathlib

dataset_url = "https://storage.googleapis.com/download.tensorflow.org/example_images/flower_photos.tgz"
data_dir = tf.keras.utils.get_file('flower_photos.tar', origin=dataset_url, extract=True)
data_dir = pathlib.Path(data_dir).with_suffix('')

batch_size = 32
img_height = 180
img_width = 180

train_ds = tf.keras.utils.image_dataset_from_directory(
  data_dir,
  validation_split=0.2,
  subset="training",
  seed=123,
  image_size=(img_height, img_width),
  batch_size=batch_size)

val_ds = tf.keras.utils.image_dataset_from_directory(
  data_dir,
  validation_split=0.2,
  subset="validation",
  seed=123,
  image_size=(img_height, img_width),
  batch_size=batch_size)

class_names = train_ds.class_names

AUTOTUNE = tf.data.AUTOTUNE

train_ds = train_ds.cache().shuffle(1000).prefetch(buffer_size=AUTOTUNE)
val_ds = val_ds.cache().prefetch(buffer_size=AUTOTUNE)

# Compile the model
num_classes = len(class_names)

model = Sequential([
  layers.Rescaling(1./255, input_shape=(img_height, img_width, 3)),
  layers.Conv2D(16, 3, padding='same', activation='relu'),
  layers.MaxPooling2D(),
  layers.Conv2D(32, 3, padding='same', activation='relu'),
  layers.MaxPooling2D(),
  layers.Conv2D(64, 3, padding='same', activation='relu'),
  layers.MaxPooling2D(),
  layers.Flatten(),
  layers.Dense(128, activation='relu'),
  layers.Dense(num_classes)
])

model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

model.summary()

# Train the model
epochs=10
history = model.fit(
  train_ds,
  validation_data=val_ds,
  epochs=epochs
)

converter = tf.lite.TFLiteConverter.from_keras_model(model)
tflite_model = converter.convert()

with open('model.tflite', 'wb') as f:
  f.write(tflite_model)
`,language:"python",process:!0,children:(t,s)=>{n();var e=a(`import matplotlib.pyplot as plt
import numpy as np
import tensorflow as tf

from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.models import Sequential
import pathlib

dataset_url = "https://storage.googleapis.com/download.tensorflow.org/example_images/flower_photos.tgz"
data_dir = tf.keras.utils.get_file('flower_photos.tar', origin=dataset_url, extract=True)
data_dir = pathlib.Path(data_dir).with_suffix('')

batch_size = 32
img_height = 180
img_width = 180

train_ds = tf.keras.utils.image_dataset_from_directory(
  data_dir,
  validation_split=0.2,
  subset="training",
  seed=123,
  image_size=(img_height, img_width),
  batch_size=batch_size)

val_ds = tf.keras.utils.image_dataset_from_directory(
  data_dir,
  validation_split=0.2,
  subset="validation",
  seed=123,
  image_size=(img_height, img_width),
  batch_size=batch_size)

class_names = train_ds.class_names

AUTOTUNE = tf.data.AUTOTUNE

train_ds = train_ds.cache().shuffle(1000).prefetch(buffer_size=AUTOTUNE)
val_ds = val_ds.cache().prefetch(buffer_size=AUTOTUNE)

# Compile the model
num_classes = len(class_names)

model = Sequential([
  layers.Rescaling(1./255, input_shape=(img_height, img_width, 3)),
  layers.Conv2D(16, 3, padding='same', activation='relu'),
  layers.MaxPooling2D(),
  layers.Conv2D(32, 3, padding='same', activation='relu'),
  layers.MaxPooling2D(),
  layers.Conv2D(64, 3, padding='same', activation='relu'),
  layers.MaxPooling2D(),
  layers.Flatten(),
  layers.Dense(128, activation='relu'),
  layers.Dense(num_classes)
])

model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

model.summary()

# Train the model
epochs=10
history = model.fit(
  train_ds,
  validation_data=val_ds,
  epochs=epochs
)

converter = tf.lite.TFLiteConverter.from_keras_model(model)
tflite_model = converter.convert()

with open('model.tflite', 'wb') as f:
  f.write(tflite_model)`);r(t,e)},$$slots:{default:!0}});var te=o(ee);i(te,{children:(t,s)=>{n();var e=a("This code will download a bunch of sample images of flowers, create two groups of images for training and validation with an 80/20 split, and then build a standard convolutional neural network and train it. Finally, it will export the trained model into a TensorFlow Lite model.");r(t,e)},$$slots:{default:!0}});var ne=o(te);p(ne,{level:3,children:(t,s)=>{n();var e=a("Step 2: Create a new function");r(t,e)},$$slots:{default:!0}});var oe=o(ne);i(oe,{children:(t,s)=>{n();var e=a("Next, initialize a new function using the Backrush CLI by using:");r(t,e)},$$slots:{default:!0}});var re=o(oe);w(re,{content:`backrush init project # Use if you don't already have an backrush.json
backrush init function
`,language:"bash",process:!0,children:(t,s)=>{n();var e=a(`backrush init project # Use if you don't already have an backrush.json
backrush init function`);r(t,e)},$$slots:{default:!0}});var ae=o(re);i(ae,{children:(t,s)=>{n();var e=Le(),l=o(g(e));$(l,{content:"Python (ML)"}),n(),r(t,e)},$$slots:{default:!0}});var se=o(ae);p(se,{level:3,children:(t,s)=>{n();var e=a("Step 3: Add our inference code to the function");r(t,e)},$$slots:{default:!0}});var ie=o(se);i(ie,{children:(t,s)=>{n();var e=Oe(),l=o(g(e));$(l,{content:"main.py"}),n(),r(t,e)},$$slots:{default:!0}});var le=o(ie);w(le,{content:`import os
import json
import numpy as np
import tensorflow as tf
from PIL import Image
from io import BytesIO
from backrush.client import Client
from backrush.services.storage import Storage

script_dir = os.path.dirname(os.path.abspath(__file__))
TF_MODEL_FILE_PATH = os.path.join(script_dir, 'model.tflite')
img_height = 180
img_width = 180

interpreter = tf.lite.Interpreter(model_path=TF_MODEL_FILE_PATH)
interpreter.allocate_tensors()

def preprocess_image(image_bytes):
    img = Image.open(BytesIO(image_bytes))
    img = img.resize((img_width, img_height))
    img = np.array(img)
    img = img.astype('float32') / 255.0
    img = np.expand_dims(img, axis=0)
    return img

def main(context):
    if context.req.method != "POST":
        return context.res.send("Invalid Request", 400)

    client = (
        Client()
        .set_endpoint("https://<REGION>.cloud.backrush.io/v1")
        .set_project(os.environ["BACKRUSH_FUNCTION_PROJECT_ID"])
        .set_key(os.environ["BACKRUSH_API_KEY"])
    )

    bucketId = os.environ["BACKRUSH_BUCKET_ID"]

    storage = Storage(client)

    try:
        body = json.loads(context.req.body)
    except ValueError as err:
        return context.res.json({"ok": False, "error": err.message}, 400)

    file_id = body["$id"]
    file_bytes = storage.get_file_download(bucketId, file_id)
    
    # Preprocess the image
    img = preprocess_image(file_bytes)

    # Get the signature runner for the model
    classify_lite = interpreter.get_signature_runner('serving_default')
    
    # Run the image through the model
    predictions_lite = classify_lite(rescaling_1_input=img)['dense_1']
    score_lite = tf.nn.softmax(predictions_lite)

    class_names = ['daisy', 'dandelion', 'roses', 'sunflowers', 'tulips']

    response_message = "This image most likely belongs to {} with a {:.2f} percent confidence.".format(
        class_names[np.argmax(score_lite)], 100 * np.max(score_lite)
    )

    context.log(response_message)
    return context.res.send(response_message, 200)
`,language:"python",process:!0,children:(t,s)=>{n();var e=a(`import os
import json
import numpy as np
import tensorflow as tf
from PIL import Image
from io import BytesIO
from backrush.client import Client
from backrush.services.storage import Storage

script_dir = os.path.dirname(os.path.abspath(__file__))
TF_MODEL_FILE_PATH = os.path.join(script_dir, 'model.tflite')
img_height = 180
img_width = 180

interpreter = tf.lite.Interpreter(model_path=TF_MODEL_FILE_PATH)
interpreter.allocate_tensors()

def preprocess_image(image_bytes):
    img = Image.open(BytesIO(image_bytes))
    img = img.resize((img_width, img_height))
    img = np.array(img)
    img = img.astype('float32') / 255.0
    img = np.expand_dims(img, axis=0)
    return img

def main(context):
    if context.req.method != "POST":
        return context.res.send("Invalid Request", 400)

    client = (
        Client()
        .set_endpoint("https://<REGION>.cloud.backrush.io/v1")
        .set_project(os.environ["BACKRUSH_FUNCTION_PROJECT_ID"])
        .set_key(os.environ["BACKRUSH_API_KEY"])
    )

    bucketId = os.environ["BACKRUSH_BUCKET_ID"]

    storage = Storage(client)

    try:
        body = json.loads(context.req.body)
    except ValueError as err:
        return context.res.json({"ok": False, "error": err.message}, 400)

    file_id = body["$id"]
    file_bytes = storage.get_file_download(bucketId, file_id)
    
    # Preprocess the image
    img = preprocess_image(file_bytes)

    # Get the signature runner for the model
    classify_lite = interpreter.get_signature_runner('serving_default')
    
    # Run the image through the model
    predictions_lite = classify_lite(rescaling_1_input=img)['dense_1']
    score_lite = tf.nn.softmax(predictions_lite)

    class_names = ['daisy', 'dandelion', 'roses', 'sunflowers', 'tulips']

    response_message = "This image most likely belongs to {} with a {:.2f} percent confidence.".format(
        class_names[np.argmax(score_lite)], 100 * np.max(score_lite)
    )

    context.log(response_message)
    return context.res.send(response_message, 200)`);r(t,e)},$$slots:{default:!0}});var de=o(le);i(de,{children:(t,s)=>{n();var e=a("Add a requirements.txt file with TensorFlow and NumPy, to fetch the required dependencies:");r(t,e)},$$slots:{default:!0}});var ce=o(de);w(ce,{content:`tensorflow
appwrite
numpy
Pillow
`,language:"text",process:!0,children:(t,s)=>{n();var e=a(`tensorflow
appwrite
numpy
Pillow`);r(t,e)},$$slots:{default:!0}});var pe=o(ce);p(pe,{level:3,children:(t,s)=>{n();var e=a("Step 4: Deploy your function");r(t,e)},$$slots:{default:!0}});var ue=o(pe);i(ue,{children:(t,s)=>{n();var e=Ue(),l=o(g(e));$(l,{content:"model.tflite"});var d=o(l,2);$(d,{content:"main.py"});var h=o(d,2);$(h,{content:"backrush.json"});var c=o(h,2);$(c,{content:"model.tflite"});var f=o(c,2);$(f,{content:"getFileDownload"}),n(),r(t,e)},$$slots:{default:!0}});var he=o(ue);i(he,{children:(t,s)=>{n();var e=a("With the file now copied, run backrush deploy function and select the function to deploy it to Backrush.");r(t,e)},$$slots:{default:!0}});var me=o(he);p(me,{level:3,children:(t,s)=>{n();var e=a("Step 5: Update your environment variables");r(t,e)},$$slots:{default:!0}});var fe=o(me);i(fe,{children:(t,s)=>{n();var e=je(),l=o(g(e));$(l,{content:"BACKRUSH_API_KEY"});var d=o(l,2);$(d,{content:"BACKRUSH_BUCKET_ID"}),n(),r(t,e)},$$slots:{default:!0}});var _e=o(fe);p(_e,{level:3,children:(t,s)=>{n();var e=a("Step 6: Test your function");r(t,e)},$$slots:{default:!0}});var ge=o(_e);i(ge,{children:(t,s)=>{n();var e=Me(),l=o(g(e));$(l,{content:"POST"}),n(),r(t,e)},$$slots:{default:!0}});var $e=o(ge);w($e,{content:`{"$id": "66503a9e00246481a92c"}
`,language:"json",process:!0,children:(t,s)=>{n();var e=a('{"$id": "66503a9e00246481a92c"}');r(t,e)},$$slots:{default:!0}});var ve=o($e);i(ve,{children:(t,s)=>{n();var e=a("The classification result will be returned shortly as a response. This function can also accept a file event. To build on this function, you may want to upload the result to the database to identify images uploaded to your instance automatically.");r(t,e)},$$slots:{default:!0}});var we=o(ve);p(we,{level:1,children:(t,s)=>{n();var e=a("Conclusion");r(t,e)},$$slots:{default:!0}});var ye=o(we);i(ye,{children:(t,s)=>{n();var e=qe(),l=o(g(e));u(l,{href:"https://backrush.io/discord",children:(d,h)=>{n();var c=a("Discord server");r(d,c)},$$slots:{default:!0}}),n(),r(t,e)},$$slots:{default:!0}});var Pe=o(ye);i(Pe,{children:(t,s)=>{n();var e=a("Check out the resources below to learn how to integrate AI into your Backrush-powered application. We can’t wait to see what you build!");r(t,e)},$$slots:{default:!0}});var Ce=o(Pe);Ee(Ce,{ordered:!1,marker:"-",children:(t,s)=>{var e=Ve(),l=g(e);P(l,{children:(c,f)=>{u(c,{href:"https://backrush.io/docs/products/ai",children:(_,be)=>{n();var v=a("Backrush AI integrations documentation");r(_,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=o(l);P(d,{children:(c,f)=>{u(c,{href:"https://backrush.io/blog/post/personal-chatbot-gpt-4o",children:(_,be)=>{n();var v=a("Build an intelligent chatbot with GPT-4o and Backrush Functions");r(_,v)},$$slots:{default:!0}})},$$slots:{default:!0}});var h=o(d);P(h,{children:(c,f)=>{u(c,{href:"https://backrush.io/blog/post/building-with-ai-function-templates",children:(_,be)=>{n();var v=a("Learn how to build with Backrush AI Function templates");r(_,v)},$$slots:{default:!0}})},$$slots:{default:!0}}),r(t,e)},$$slots:{default:!0}}),ke(y),r(Ie,y)},$$slots:{default:!0}}))}const ht=Object.freeze(Object.defineProperty({__proto__:null,default:We,frontmatter:xe},Symbol.toStringTag,{value:"Module"}));export{ht as _,We as a};

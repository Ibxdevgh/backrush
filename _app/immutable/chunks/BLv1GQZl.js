import{t as p,b as a,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as ie,s as n,f as h,n as r,r as le}from"./NgVQVlRK.js";import{n as de}from"./B4IyMRKX.js";import{H as g}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I as te}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{C as b}from"./DXp9_3zM.js";import{F as ue}from"./OFUKRh55.js";import{L as ce,I as x}from"./BhmTgGWB.js";import{P as c}from"./D8YsId2T.js";import{S as P}from"./yHjwcyUH.js";import{L as _}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as me}from"./CEkRzcqJ.js";const re={layout:"post",title:"Introducing the Python machine learning runtime",description:"A new runtime optimized for machine learning workloads, now available in Backrush Cloud.",date:"2024-05-21T00:00:00.000Z",cover:"/images/blog/introducing-python-machine-learning-runtime/cover.png",timeToRead:5,author:"luke-silver",category:"product, announcement",featured:!1};var pe=p("We&#39;re excited to present Backrush&#39;s newest Function runtime, <!> The new runtime has been tailored and optimised for machine learning use cases, saving you a lot of hassle and time, making building AI powered applications a whole lot easier.",1),fe=p("Python&#39;s simplicity and it&#39;s rich ecosystem of data science libraries have made it the preferred languages for machine learning research and implementation. The jewels of this ecosystem are libraries and frameworks specifically designed for machine learning, such as <!>, <!>, <!>, <!>, and <!>. These libraries provide pre-built functions and algorithms for common machine-learning tasks, enabling developers to build and train models quickly and efficiently.",1),he=p("Backrush&#39;s Python runtime has been one of the most popular Function runtimes. However, it has a limitation with machine learning use cases. The image was built on an Alpine Docker image. We chose Alpine because it&#39;s images offer a minimal and clean distribution of Linux. The current Python runtime has a compressed <!> Unfortunately, Alpine doesn&#39;t support installing machine learning libraries like <!> and <!> due to the absence of some core libraries and build tools.",1),_e=p("Head to the <!> then click on <!> in the left sidebar and then click on the <!> button. <!>",1),$e=p("To get started with the new runtime, navigate to your Backrush console and select <!> when creating a new function.",1),ve=p("<!><!><!>",1),ge=p("Find the full source code in our <!>.",1),ye=p("The Python ML runtime is in <em>beta</em>. We plan to iterate in response to developer demand and needs. For now, the runtime is CPU-only. Here are some tips and tricks to help you overcome this limitation:",1),we=p("Tensorflow Lite models are optimized for mobile and edge devices. They are smaller in size and can be run on the CPU. A typical tensorflow model can be 10x smaller when converted to a Tensorflow Lite model, with only a small loss in accuracy. You can convert your Tensorflow models to Tensorflow Lite models using the <!>.",1),be=p("Synchronous executions have a global timeout limit of 30s on Backrush Cloud. Therefore, it is recommended to use asynchronous function executions for long running tasks. This will allow you to run multiple tasks concurrently, set your own timeout period and make the most of the compute resources available. Create an asynchronous execution using the <!> parameter in the <!>.",1),Pe=p("If you see <!> errors when executing your function, navigate to your <!> and try increasing your timeout period to a larger number such 50 seconds or more.",1),Te=p("We&#39;ve built a range of example functions and technical guides in our <!>.",1),xe=p("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function ke(ne){me(ne,de(re,{children:(oe,Ae)=>{var T=xe(),k=ie(T);g(k,{level:1,children:(t,s)=>{r();var e=a("Introducing Python ML");o(t,e)},$$slots:{default:!0}});var A=n(k);c(A,{children:(t,s)=>{r();var e=a("If you're looking to build AI powered applications, you've probably considered using Python. And in case you haven't, it's probably time you did. We at Backrush have thought about it, and our conclusion is simple. To improve the experience of building AI powered apps with Backrush, a new runtime needs to emerge to cater to AI specific needs.");o(t,e)},$$slots:{default:!0}});var U=n(A);c(U,{children:(t,s)=>{r();var e=pe(),i=n(h(e));P(i,{marker:"**",children:(l,m)=>{r();var d=a("Python ML.");o(l,d)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var C=n(U);g(C,{level:2,children:(t,s)=>{r();var e=a("Python and Machine Learning");o(t,e)},$$slots:{default:!0}});var L=n(C);c(L,{children:(t,s)=>{r();var e=fe(),i=n(h(e));_(i,{href:"https://www.tensorflow.org/",children:(u,v)=>{r();var f=a("TensorFlow");o(u,f)},$$slots:{default:!0}});var l=n(i,2);_(l,{href:"https://pytorch.org/",children:(u,v)=>{r();var f=a("PyTorch");o(u,f)},$$slots:{default:!0}});var m=n(l,2);_(m,{href:"https://scikit-learn.org/stable/",children:(u,v)=>{r();var f=a("scikit-learn");o(u,f)},$$slots:{default:!0}});var d=n(m,2);_(d,{href:"https://keras.io/",children:(u,v)=>{r();var f=a("Keras");o(u,f)},$$slots:{default:!0}});var $=n(d,2);_($,{href:"https://www.nltk.org/",children:(u,v)=>{r();var f=a("NLTK");o(u,f)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var I=n(L);g(I,{level:2,children:(t,s)=>{r();var e=a("Why build a new runtime");o(t,e)},$$slots:{default:!0}});var F=n(I);c(F,{children:(t,s)=>{r();var e=he(),i=n(h(e));_(i,{href:"https://hub.docker.com/layers/openruntimes/python/v3-3.9/images/sha256-f6d89b6d2f570b8176af767fddc0b268ebeb8a9532243410e03cb60f9d9780b3?context=explore",children:(d,$)=>{r();var u=a("size of under 22MB!");o(d,u)},$$slots:{default:!0}});var l=n(i,2);b(l,{content:"numpy"});var m=n(l,2);b(m,{content:"Tensorflow"}),r(),o(t,e)},$$slots:{default:!0}});var S=n(F);c(S,{children:(t,s)=>{r();var e=a("We decided to build a new runtime image to overcome this limitation and at the same time benefit from all the hardware-specific optimisations required for running models at scale. The Python ML runtime will allow you to install all the libraries and tools required for Machine Learning with ease. While we procure and build a world class GPU infrastructure for training, fine-tuning and inference, we'd like to bring to your notice that the Python ML runtime is currently CPU-only during the Beta. We understand this can be a challenge for certain use cases, however we have some actionable tips and tricks to overcome these limitations in the interim.");o(t,e)},$$slots:{default:!0}});var z=n(S);g(z,{level:2,children:(t,s)=>{r();var e=a("Getting started");o(t,e)},$$slots:{default:!0}});var O=n(z);ce(O,{ordered:!0,marker:".",children:(t,s)=>{var e=ve(),i=h(e);x(i,{children:(d,$)=>{r();var u=_e(),v=n(h(u));_(v,{href:"https://cloud.appwrite.io/console",children:(y,ee)=>{r();var w=a("Backrush Console");o(y,w)},$$slots:{default:!0}});var f=n(v,2);P(f,{marker:"**",children:(y,ee)=>{r();var w=a("Functions");o(y,w)},$$slots:{default:!0}});var X=n(f,2);P(X,{marker:"**",children:(y,ee)=>{r();var w=a("Create Function");o(y,w)},$$slots:{default:!0}});var se=n(X,2);te(se,{src:"/images/blog/introducing-python-machine-learning-runtime/create-function.png",alt:"Create Function"}),o(d,u)},$$slots:{default:!0}});var l=n(i);x(l,{children:(d,$)=>{r();var u=$e(),v=n(h(u));b(v,{content:"Python (ML) 3.11"}),r(),o(d,u)},$$slots:{default:!0}});var m=n(l);x(m,{children:(d,$)=>{r();var u=a("Follow the step-by-step wizard and create the function.");o(d,u)},$$slots:{default:!0}}),o(t,e)},$$slots:{default:!0}});var M=n(O);c(M,{children:(t,s)=>{r();var e=a("Here's an example function that trains a simple neural network on the MNIST dataset using TensorFlow and TensorFlow Datasets:");o(t,e)},$$slots:{default:!0}});var N=n(M);ue(N,{content:`import tensorflow as tf
import tensorflow_datasets as tfds


def normalize_img(image, label):
    return tf.cast(image, tf.float32) / 255.0, label


def main(context):
    (ds_train, ds_test), ds_info = tfds.load(
        "mnist",
        split=["train", "test"],
        shuffle_files=True,
        as_supervised=True,
        with_info=True,
    )

    ds_train = ds_train.map(normalize_img, num_parallel_calls=tf.data.AUTOTUNE)
    ds_train = ds_train.cache()
    ds_train = ds_train.shuffle(ds_info.splits["train"].num_examples)
    ds_train = ds_train.batch(128)
    ds_train = ds_train.prefetch(tf.data.AUTOTUNE)

    ds_test = ds_test.map(normalize_img, num_parallel_calls=tf.data.AUTOTUNE)
    ds_test = ds_test.batch(128)
    ds_test = ds_test.cache()
    ds_test = ds_test.prefetch(tf.data.AUTOTUNE)

    model = tf.keras.models.Sequential(
        [
            tf.keras.layers.Flatten(input_shape=(28, 28)),
            tf.keras.layers.Dense(128, activation="relu"),
            tf.keras.layers.Dense(10),
        ]
    )

    model.compile(
        optimizer=tf.keras.optimizers.Adam(0.001),
        loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
        metrics=[tf.keras.metrics.SparseCategoricalAccuracy()],
    )

    model.fit(
        ds_train,
        epochs=6,
        validation_data=ds_test,
    )

    return context.res.json({"success": True})
`,language:"python",process:!0,children:(t,s)=>{r();var e=a(`import tensorflow as tf
import tensorflow_datasets as tfds


def normalize_img(image, label):
    return tf.cast(image, tf.float32) / 255.0, label


def main(context):
    (ds_train, ds_test), ds_info = tfds.load(
        "mnist",
        split=["train", "test"],
        shuffle_files=True,
        as_supervised=True,
        with_info=True,
    )

    ds_train = ds_train.map(normalize_img, num_parallel_calls=tf.data.AUTOTUNE)
    ds_train = ds_train.cache()
    ds_train = ds_train.shuffle(ds_info.splits["train"].num_examples)
    ds_train = ds_train.batch(128)
    ds_train = ds_train.prefetch(tf.data.AUTOTUNE)

    ds_test = ds_test.map(normalize_img, num_parallel_calls=tf.data.AUTOTUNE)
    ds_test = ds_test.batch(128)
    ds_test = ds_test.cache()
    ds_test = ds_test.prefetch(tf.data.AUTOTUNE)

    model = tf.keras.models.Sequential(
        [
            tf.keras.layers.Flatten(input_shape=(28, 28)),
            tf.keras.layers.Dense(128, activation="relu"),
            tf.keras.layers.Dense(10),
        ]
    )

    model.compile(
        optimizer=tf.keras.optimizers.Adam(0.001),
        loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
        metrics=[tf.keras.metrics.SparseCategoricalAccuracy()],
    )

    model.fit(
        ds_train,
        epochs=6,
        validation_data=ds_test,
    )

    return context.res.json({"success": True})`);o(t,e)},$$slots:{default:!0}});var E=n(N);c(E,{children:(t,s)=>{r();var e=ge(),i=n(h(e));_(i,{href:"https://github.com/open-runtimes/open-runtimes/tree/main/runtimes/python-ml-3.11",children:(l,m)=>{r();var d=a("GitHub repository");o(l,d)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var W=n(E);g(W,{level:2,children:(t,s)=>{r();var e=a("Best practices");o(t,e)},$$slots:{default:!0}});var H=n(W);c(H,{children:(t,s)=>{r();var e=ye();r(2),o(t,e)},$$slots:{default:!0}});var q=n(H);g(q,{level:3,children:(t,s)=>{r();var e=a("Smaller models & Tensorflow Lite");o(t,e)},$$slots:{default:!0}});var D=n(q);c(D,{children:(t,s)=>{r();var e=a("Smaller models are faster to load and execute. Avoid using large models that require a lot of memory and CPU resources.");o(t,e)},$$slots:{default:!0}});var j=n(D);c(j,{children:(t,s)=>{r();var e=we(),i=n(h(e));_(i,{href:"https://www.tensorflow.org/lite/convert",children:(l,m)=>{r();var d=a("Tensorflow Lite Converter");o(l,d)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var G=n(j);g(G,{level:3,children:(t,s)=>{r();var e=a("Async executions");o(t,e)},$$slots:{default:!0}});var B=n(G);c(B,{children:(t,s)=>{r();var e=be(),i=n(h(e));b(i,{content:"async"});var l=n(i,2);_(l,{href:"https://appwrite.io/docs/references/cloud/client-web/functions#createExecution",children:(m,d)=>{r();var $=a("createExecution endpoint");o(m,$)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var R=n(B);c(R,{children:(t,s)=>{r();var e=Pe(),i=n(h(e));b(i,{content:"FUNCTION_SYCHRONOUS_TIMEOUT"});var l=n(i,2);P(l,{marker:"**",children:(m,d)=>{r();var $=a("Function settings");o(m,$)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}});var K=n(R);c(K,{children:(t,s)=>{te(t,{src:"/images/blog/introducing-python-machine-learning-runtime/settings-timeout.png",alt:"Settings timeout"})},$$slots:{default:!0}});var Y=n(K);g(Y,{level:2,children:(t,s)=>{r();var e=a("Training vs inference");o(t,e)},$$slots:{default:!0}});var Z=n(Y);c(Z,{children:(t,s)=>{r();var e=a("The Python ML runtime is more suitable for inference tasks. Training models on the runtime is not recommended as it can be slow and resource-intensive due to it being CPU only during the beta. We recommend training your models on a local machine or a cloud-based GPU instance and then deploying the trained model to the Python ML runtime for inference.");o(t,e)},$$slots:{default:!0}});var J=n(Z);c(J,{children:(t,s)=>{r();var e=a("If you have training that does not require intensive GPU resources, you can train your models during the build step of the function and then deploy the trained model to the runtime. This will allow you to run inference tasks without the need for repeated training.");o(t,e)},$$slots:{default:!0}});var Q=n(J);g(Q,{level:2,children:(t,s)=>{r();var e=a("Third-party integrations");o(t,e)},$$slots:{default:!0}});var V=n(Q);c(V,{children:(t,s)=>{r();var e=a("For all other use-cases, you can use third-party AI services with Backrush Functions. Perplexity, Replicate and OpenAI offer powerful APIs that can be used to train and run models on their infrastructure.");o(t,e)},$$slots:{default:!0}});var ae=n(V);c(ae,{children:(t,s)=>{r();var e=Te(),i=n(h(e));_(i,{href:"https://appwrite.io/docs/products/ai",children:(l,m)=>{r();var d=a("AI documention");o(l,d)},$$slots:{default:!0}}),r(),o(t,e)},$$slots:{default:!0}}),le(T),o(oe,T)},$$slots:{default:!0}}))}const Je=Object.freeze(Object.defineProperty({__proto__:null,default:ke,frontmatter:re},Symbol.toStringTag,{value:"Module"}));export{Je as _,ke as a};

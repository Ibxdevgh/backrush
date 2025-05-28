import{t as m,b as s,a as o}from"./Cw4I5osi.js";import"./BzVk5r6l.js";import{c as Pe,s as n,f as x,n as r,r as be}from"./NgVQVlRK.js";import{n as ye}from"./B4IyMRKX.js";import{H as v}from"./CXsRaEhZ.js";import"./hMT8fFzP.js";import"./NwRJ91PD.js";/* empty css        */import"./BZUG4Puk.js";import{I}from"./CmUbQthf.js";import"./D9bBQFLV.js";import{C as Ie}from"./DXp9_3zM.js";import{F as h}from"./OFUKRh55.js";import{L as Ae,I as w}from"./BhmTgGWB.js";import{P as i}from"./D8YsId2T.js";import{S as Te}from"./yHjwcyUH.js";import{L as u}from"./yh4_9ChP.js";import"./POtwinrL.js";import"./CbbZjpT6.js";/* empty css        *//* empty css        */import{P as Ee}from"./CEkRzcqJ.js";const me={layout:"post",title:"Streamline receipt scanning with Backrush Cloud",description:"Learn how to extract information from receipts with Backrush Cloud and Backrush Functions.",date:"2024-05-01T00:00:00.000Z",cover:"/images/blog/receipt-scan.png",timeToRead:15,author:"vincent-ge",category:"tutorial"};var ke=m("With over <!> on average, fighting for engagement and retention is tougher than ever. Users are sensitive to friction, with a reported 50% of users <!> and Shoppify reporting <!>.",1),Ce=m("Before you start, you&#39;ll need to know the basics of working with Backrush Cloud and <!>. We&#39;re going to be using Backrush Functions to run our receipt processing code, which calls a <!> to extract data from a receipt image. Make sure you also have a <!> to use the model.",1),Se=m("We&#39;re going to use the <!> to extract relevant information from the receipt image.",1),qe=m("Let&#39;s also quickly save our dependencies in a <!> file by running these commands:",1),je=m("Using a CURL request on the function&#39;s <!>:",1),Fe=m("<!><!><!><!><!>",1),Ne=m("<article><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!></article>");function He(xe){Ee(xe,ye(me,{children:(ve,Oe)=>{var y=Ne(),A=Pe(y);i(A,{children:(e,a)=>{r();var t=s("I downloaded a personal finance app a few weeks ago to help me track my expenses. I uninstalled that app about five minutes later.");o(e,t)},$$slots:{default:!0}});var T=n(A);i(T,{children:(e,a)=>{r();var t=s("All it took to lose interest was the giant form I had to fill out to add a receipt.");o(e,t)},$$slots:{default:!0}});var E=n(T);i(E,{children:(e,a)=>{r();var t=ke(),p=n(x(t));u(p,{href:"https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/average-number-of-apps-on-smartphones/",children:(d,f)=>{r();var l=s("30+ apps installed on a typical user's phone");o(d,l)},$$slots:{default:!0}});var c=n(p,2);u(c,{href:"https://www.pwc.co.uk/industries/documents/frictionless-retail-the-future-of-shopping.pdf",children:(d,f)=>{r();var l=s("opting for new online merchants just for lowered friction");o(d,l)},$$slots:{default:!0}});var $=n(c,2);u($,{href:"https://web-assets.bcg.com/e4/0c/a1acfc2a4e52a029cb37c6fe83ba/bcg-leading-online-shoppers-to-the-finish-line-june-2023.pdf",children:(d,f)=>{r();var l=s("low-friction payment methods and flows can lead to >50% increase in conversion");o(d,l)},$$slots:{default:!0}}),r(),o(e,t)},$$slots:{default:!0}});var k=n(E);i(k,{children:(e,a)=>{r();var t=s("No one has time to fill out giant forms. To help you and your users avoid filling out giant forms, we're going to build a simple receipt processing endpoint with Backrush that will extract the total amount from a receipt image using a Hugging Face model.");o(e,t)},$$slots:{default:!0}});var C=n(k);v(C,{level:1,children:(e,a)=>{r();var t=s("Prerequisites");o(e,t)},$$slots:{default:!0}});var S=n(C);i(S,{children:(e,a)=>{r();var t=Ce(),p=n(x(t));u(p,{href:"/docs/products/functions",children:(d,f)=>{r();var l=s("Backrush Functions");o(d,l)},$$slots:{default:!0}});var c=n(p,2);u(c,{href:"https://huggingface.co/AdamCodd/donut-receipts-extract",children:(d,f)=>{r();var l=s("Hugging Face model");o(d,l)},$$slots:{default:!0}});var $=n(c,2);Te($,{marker:"**",children:(d,f)=>{r();var l=s("Hugging Face API key");o(d,l)},$$slots:{default:!0}}),r(),o(e,t)},$$slots:{default:!0}});var q=n(S);v(q,{level:1,children:(e,a)=>{r();var t=s("Scanning receipts");o(e,t)},$$slots:{default:!0}});var j=n(q);i(j,{children:(e,a)=>{r();var t=Se(),p=n(x(t));u(p,{href:"https://huggingface.co/AdamCodd/donut-receipts-extract",children:(c,$)=>{r();var d=s("Hugging Face Donut Receipts Extract model");o(c,d)},$$slots:{default:!0}}),r(),o(e,t)},$$slots:{default:!0}});var F=n(j);i(F,{children:(e,a)=>{r();var t=s("Hugging Face's API makes this pretty simple. We'll send a POST request to the model's endpoint with the image data, and it will return the extracted information.");o(e,t)},$$slots:{default:!0}});var N=n(F);i(N,{children:(e,a)=>{r();var t=s("Our script can be as simple as:");o(e,t)},$$slots:{default:!0}});var H=n(N);h(H,{content:`import requests

# define the URL and image path
API_URL = "https://api-inference.huggingface.co/models/AdamCodd/donut-receipts-extract"
headers = {"Authorization": "Bearer hf_<HF_API_KEY>"}
IMAGE = "./test.jpg"

def scan_receipt(filename):
    # read the image data
    with open(filename, "rb") as f:
        data = f.read()
    # Post the image data to the model
    response = requests.post(API_URL, headers=headers, data=data)
    return response.json()
`,language:"python",process:!0,children:(e,a)=>{r();var t=s(`import requests

# define the URL and image path
API_URL = "https://api-inference.huggingface.co/models/AdamCodd/donut-receipts-extract"
headers = {"Authorization": "Bearer hf_<HF_API_KEY>"}
IMAGE = "./test.jpg"

def scan_receipt(filename):
    # read the image data
    with open(filename, "rb") as f:
        data = f.read()
    # Post the image data to the model
    response = requests.post(API_URL, headers=headers, data=data)
    return response.json()`);o(e,t)},$$slots:{default:!0}});var O=n(H);i(O,{children:(e,a)=>{r();var t=s("The response comes back as a set of XML-like tags, we can use Regex to extract the relevant information from the model response.");o(e,t)},$$slots:{default:!0}});var D=n(O);h(D,{content:`import re

def parse_receipt(text):
    # Use regular expressions to manually extract data between tags
    data = {}

    # Extract fields using regular expressions
    data['store_name'] = re.search(r'<s_store_name>(.*?)</s_store_name>', text).group(1)
    data['store_address'] = re.search(r'<s_store_addr>(.*?)</s_store_addr>', text).group(1)
    data['phone'] = re.search(r'<s_phone>(.*?)</s_phone>', text).group(1)
    data['date'] = re.search(r'<s_date>(.*?)</s_date>', text).group(1)
    data['time'] = re.search(r'<s_time>(.*?)</s_time>', text).group(1)
    data['subtotal'] = re.search(r'<s_subtotal>(.*?)</s_subtotal>', text).group(1)
    data['service_charge'] = re.search(r'<s_svc>(.*?)</s_svc>', text).group(1)
    data['tax'] = re.search(r'<s_tax>(.*?)</s_tax>', text).group(1)
    data['total'] = re.search(r'<s_total>(.*?)</s_total>', text).group(1)
    data['tips'] = re.search(r'<s_tips>(.*?)</s_tips>', text).group(1)
    data['discount'] = re.search(r'<s_discount>(.*?)</s_discount>', text).group(1)
    return data
`,language:"python",process:!0,children:(e,a)=>{r();var t=s(`import re

def parse_receipt(text):
    # Use regular expressions to manually extract data between tags
    data = {}

    # Extract fields using regular expressions
    data['store_name'] = re.search(r'<s_store_name>(.*?)</s_store_name>', text).group(1)
    data['store_address'] = re.search(r'<s_store_addr>(.*?)</s_store_addr>', text).group(1)
    data['phone'] = re.search(r'<s_phone>(.*?)</s_phone>', text).group(1)
    data['date'] = re.search(r'<s_date>(.*?)</s_date>', text).group(1)
    data['time'] = re.search(r'<s_time>(.*?)</s_time>', text).group(1)
    data['subtotal'] = re.search(r'<s_subtotal>(.*?)</s_subtotal>', text).group(1)
    data['service_charge'] = re.search(r'<s_svc>(.*?)</s_svc>', text).group(1)
    data['tax'] = re.search(r'<s_tax>(.*?)</s_tax>', text).group(1)
    data['total'] = re.search(r'<s_total>(.*?)</s_total>', text).group(1)
    data['tips'] = re.search(r'<s_tips>(.*?)</s_tips>', text).group(1)
    data['discount'] = re.search(r'<s_discount>(.*?)</s_discount>', text).group(1)
    return data`);o(e,t)},$$slots:{default:!0}});var R=n(D);i(R,{children:(e,a)=>{r();var t=s("And putting it all together:");o(e,t)},$$slots:{default:!0}});var U=n(R);h(U,{content:`# Call the function and parse the receipt using regex
parsed_receipt = parse_receipt(
    scan_receipt(IMAGE)[0]['generated_text']
)
print(parsed_receipt)
`,language:"python",process:!0,children:(e,a)=>{r();var t=s(`# Call the function and parse the receipt using regex
parsed_receipt = parse_receipt(
    scan_receipt(IMAGE)[0]['generated_text']
)
print(parsed_receipt)`);o(e,t)},$$slots:{default:!0}});var L=n(U);i(L,{children:(e,a)=>{r();var t=qe(),p=n(x(t));Ie(p,{content:"requirements.txt"}),r(),o(e,t)},$$slots:{default:!0}});var B=n(L);h(B,{content:`pip install pipreqs
pipreqs .
`,language:"bash",process:!0,children:(e,a)=>{r();var t=s(`pip install pipreqs
pipreqs .`);o(e,t)},$$slots:{default:!0}});var K=n(B);i(K,{children:(e,a)=>{r();var t=s("The outputted file for me just looks like this:");o(e,t)},$$slots:{default:!0}});var W=n(K);h(W,{content:`appwrite==5.0.2
Requests==2.31.0
`,language:"txt",process:!0,children:(e,a)=>{r();var t=s(`appwrite==5.0.2
Requests==2.31.0`);o(e,t)},$$slots:{default:!0}});var M=n(W);v(M,{level:1,children:(e,a)=>{r();var t=s("Integrating with Backrush Functions");o(e,t)},$$slots:{default:!0}});var Y=n(M);i(Y,{children:(e,a)=>{r();var t=s("This script is great for running locally, but we want to run it in the Cloud so we can call it from our app. We also want to make sure we're not exposing our Hugging Face API key in our app and add user based permissions to our endpoint.");o(e,t)},$$slots:{default:!0}});var J=n(Y);i(J,{children:(e,a)=>{r();var t=s("Let's create a new function in Backrush Functions to run our script. We'll use the Python starter template, which will automatically create a repo on your account, add boilerplate code, and deploy the function to Backrush Cloud.");o(e,t)},$$slots:{default:!0}});var G=n(J);i(G,{children:(e,a)=>{I(e,{src:"/images/blog/scan-receipts-with-backrush-functions/scan-function.png",alt:"Scan function in Backrush"})},$$slots:{default:!0}});var z=n(G);i(z,{children:(e,a)=>{r();var t=s("Navigate to the settings tab of the function and add the following environment variables:");o(e,t)},$$slots:{default:!0}});var X=n(z);i(X,{children:(e,a)=>{I(e,{src:"/images/blog/scan-receipts-with-backrush-functions/environment-variables.png",alt:"Environment Variables"})},$$slots:{default:!0}});var V=n(X);i(V,{children:(e,a)=>{r();var t=s("The generated starter code will look like this when you clone the repo:");o(e,t)},$$slots:{default:!0}});var Z=n(V);h(Z,{content:`from backrush.client import Client
import os


# This is your Backrush function
# It's executed each time we get a request
def main(context):
    # Why not try the Backrush SDK?
    #
    # Set project and set API key
    # client = (
    #     Client()
    #        .set_project(os.environ["BACKRUSH_FUNCTION_PROJECT_ID"])
    #        .set_key(context.req.headers["x-backrush-key"])
    # )

    # You can log messages to the console
    context.log("Hello, Logs!")

    # If something goes wrong, log an error
    context.error("Hello, Errors!")

    # The \`ctx.req\` object contains the request data
    if context.req.method == "GET":
        # Send a response with the res object helpers
        # \`ctx.res.text()\` dispatches a string back to the client
        return context.res.text("Hello, World!")

    # \`ctx.res.json()\` is a handy helper for sending JSON
    return context.res.json(
        {
            "motto": "Build like a team of hundreds_",
            "learn": "https://backrush.io/docs",
            "connect": "https://backrush.io/discord",
            "getInspired": "https://builtwith.appwrite.io",
        }
    )

`,language:"python",process:!0,children:(e,a)=>{r();var t=s(`from backrush.client import Client
import os


# This is your Backrush function
# It's executed each time we get a request
def main(context):
    # Why not try the Backrush SDK?
    #
    # Set project and set API key
    # client = (
    #     Client()
    #        .set_project(os.environ["BACKRUSH_FUNCTION_PROJECT_ID"])
    #        .set_key(context.req.headers["x-backrush-key"])
    # )

    # You can log messages to the console
    context.log("Hello, Logs!")

    # If something goes wrong, log an error
    context.error("Hello, Errors!")

    # The \`ctx.req\` object contains the request data
    if context.req.method == "GET":
        # Send a response with the res object helpers
        # \`ctx.res.text()\` dispatches a string back to the client
        return context.res.text("Hello, World!")

    # \`ctx.res.json()\` is a handy helper for sending JSON
    return context.res.json(
        {
            "motto": "Build like a team of hundreds_",
            "learn": "https://backrush.io/docs",
            "connect": "https://backrush.io/discord",
            "getInspired": "https://builtwith.appwrite.io",
        }
    )`);o(e,t)},$$slots:{default:!0}});var Q=n(Z);i(Q,{children:(e,a)=>{r();var t=s("We will update the function to accept a file ID from Backrush Storage, download the file, and run our receipt scanning script on it.");o(e,t)},$$slots:{default:!0}});var ee=n(Q);i(ee,{children:(e,a)=>{r();var t=s("First, setup the Backrush SDK in the function.");o(e,t)},$$slots:{default:!0}});var te=n(ee);h(te,{content:`import os
import requests
import re
from backrush.client import Client
from backrush.services.storage import Storage

def main(context):
    HF_API_KEY = os.environ['HF_API_KEY']
    HF_ENDPOINT = os.environ['HF_ENDPOINT']
    BUCKET_ID = os.environ['BUCKET_ID']
    headers = {'Authorization': HF_API_KEY}

    # Set project and set API key
    # client = new Client()
    #   .set_project(os.environ['BACKRUSH_FUNCTION_PROJECT_ID'])
    #   .set_key(context.req.headers['x-backrush-key']);
  
    storage = Storage(client)

    # ... rest of the code
`,language:"python",process:!0,children:(e,a)=>{r();var t=s(`import os
import requests
import re
from backrush.client import Client
from backrush.services.storage import Storage

def main(context):
    HF_API_KEY = os.environ['HF_API_KEY']
    HF_ENDPOINT = os.environ['HF_ENDPOINT']
    BUCKET_ID = os.environ['BUCKET_ID']
    headers = {'Authorization': HF_API_KEY}

    # Set project and set API key
    # client = new Client()
    #   .set_project(os.environ['BACKRUSH_FUNCTION_PROJECT_ID'])
    #   .set_key(context.req.headers['x-backrush-key']);
  
    storage = Storage(client)

    # ... rest of the code`);o(e,t)},$$slots:{default:!0}});var re=n(te);i(re,{children:(e,a)=>{r();var t=s("Next, we'll download the file from Backrush Storage and run our receipt scanning script on it.");o(e,t)},$$slots:{default:!0}});var ne=n(re);h(ne,{content:`    # ... still in main()
    file_id = context.req.body["$id"]

    def scan_receipt(data):
        response = requests.post(HF_ENDPOINT, headers=headers, data=data)
        return response.json()

    def parse_receipt(text):
        data = {}
        data['store_name'] = re.search(r'<s_store_name>(.*?)</s_store_name>', text).group(1)
        data['store_address'] = re.search(r'<s_store_addr>(.*?)</s_store_addr>', text).group(1)
        data['phone'] = re.search(r'<s_phone>(.*?)</s_phone>', text).group(1)
        data['date'] = re.search(r'<s_date>(.*?)</s_date>', text).group(1)
        data['time'] = re.search(r'<s_time>(.*?)</s_time>', text).group(1)
        data['subtotal'] = re.search(r'<s_subtotal>(.*?)</s_subtotal>', text).group(1)
        data['service_charge'] = re.search(r'<s_svc>(.*?)</s_svc>', text).group(1)
        data['tax'] = re.search(r'<s_tax>(.*?)</s_tax>', text).group(1)
        data['total'] = re.search(r'<s_total>(.*?)</s_total>', text).group(1)
        data['tips'] = re.search(r'<s_tips>(.*?)</s_tips>', text).group(1)
        data['discount'] = re.search(r'<s_discount>(.*?)</s_discount>', text).group(1)
        return data

    image = storage.get_file_download(bucket_id=BUCKET_ID, file_id=file_id)
    parsed_receipt = parse_receipt(
        scan_receipt(image)[0]['generated_text']
    )

    # Return the data we got as a JSON response
    return context.res.json({
        "receipt": parsed_receipt
    }, 200)
`,language:"python",process:!0,children:(e,a)=>{r();var t=s(`# ... still in main()
    file_id = context.req.body["$id"]

    def scan_receipt(data):
        response = requests.post(HF_ENDPOINT, headers=headers, data=data)
        return response.json()

    def parse_receipt(text):
        data = {}
        data['store_name'] = re.search(r'<s_store_name>(.*?)</s_store_name>', text).group(1)
        data['store_address'] = re.search(r'<s_store_addr>(.*?)</s_store_addr>', text).group(1)
        data['phone'] = re.search(r'<s_phone>(.*?)</s_phone>', text).group(1)
        data['date'] = re.search(r'<s_date>(.*?)</s_date>', text).group(1)
        data['time'] = re.search(r'<s_time>(.*?)</s_time>', text).group(1)
        data['subtotal'] = re.search(r'<s_subtotal>(.*?)</s_subtotal>', text).group(1)
        data['service_charge'] = re.search(r'<s_svc>(.*?)</s_svc>', text).group(1)
        data['tax'] = re.search(r'<s_tax>(.*?)</s_tax>', text).group(1)
        data['total'] = re.search(r'<s_total>(.*?)</s_total>', text).group(1)
        data['tips'] = re.search(r'<s_tips>(.*?)</s_tips>', text).group(1)
        data['discount'] = re.search(r'<s_discount>(.*?)</s_discount>', text).group(1)
        return data

    image = storage.get_file_download(bucket_id=BUCKET_ID, file_id=file_id)
    parsed_receipt = parse_receipt(
        scan_receipt(image)[0]['generated_text']
    )

    # Return the data we got as a JSON response
    return context.res.json({
        "receipt": parsed_receipt
    }, 200)`);o(e,t)},$$slots:{default:!0}});var oe=n(ne);v(oe,{level:1,children:(e,a)=>{r();var t=s("Make a request");o(e,t)},$$slots:{default:!0}});var se=n(oe);i(se,{children:(e,a)=>{r();var t=s("Now that our function is set up, we can make a request to it from our app to scan a receipt.");o(e,t)},$$slots:{default:!0}});var ae=n(se);i(ae,{children:(e,a)=>{r();var t=je(),p=n(x(t));u(p,{href:"/docs/products/functions/domains",children:(c,$)=>{r();var d=s("domain");o(c,d)},$$slots:{default:!0}}),r(),o(e,t)},$$slots:{default:!0}});var ie=n(ae);h(ie,{content:`curl -X POST https://66325723b6d05e9f6262.appwrite.global \\
     -H "Content-Type: application/json" \\
     -d '{"$id": "66328472002415a37392"}'
`,language:"bash",process:!0,children:(e,a)=>{r();var t=s(`curl -X POST https://66325723b6d05e9f6262.appwrite.global \\
     -H "Content-Type: application/json" \\
     -d '{"$id": "66328472002415a37392"}'`);o(e,t)},$$slots:{default:!0}});var le=n(ie);i(le,{children:(e,a)=>{r();var t=s("Which might return something like:");o(e,t)},$$slots:{default:!0}});var de=n(le);h(de,{content:`{
  "receipt": {
    "store_name": " Boutique",
    "store_address": " 4143 STATE STREET LOS ANGELES, CA",
    "phone": "213-555-1234",
    "date": "2022-03-05",
    "time": "13:05PM",
    "subtotal": " $183,87",
    "service_charge": "",
    "tax": " $22,98",
    "total": " $206,85",
    "tips": "",
    "discount": ""
  }
}
`,language:"json",process:!0,children:(e,a)=>{r();var t=s(`{
  "receipt": {
    "store_name": " Boutique",
    "store_address": " 4143 STATE STREET LOS ANGELES, CA",
    "phone": "213-555-1234",
    "date": "2022-03-05",
    "time": "13:05PM",
    "subtotal": " $183,87",
    "service_charge": "",
    "tax": " $22,98",
    "total": " $206,85",
    "tips": "",
    "discount": ""
  }
}`);o(e,t)},$$slots:{default:!0}});var pe=n(de);v(pe,{level:1,children:(e,a)=>{r();var t=s("Next steps");o(e,t)},$$slots:{default:!0}});var ce=n(pe);i(ce,{children:(e,a)=>{r();var t=s("There are a few things you can do to integrate this into your app. For example, you could integrate this with a web app by uploading the receipt image to Backrush Storage and calling the function with the file ID.");o(e,t)},$$slots:{default:!0}});var ue=n(ce);h(ue,{content:`const file = await storage.createFile(
    '6632844900292d283610', // bucketId
    '66328472002415a37392', // fileId
    document.getElementById('uploader').files[0] // file from html input
);

const result = await functions.createExecution(
    '66325723000399792782', // functionId
    JSON.stringify({$id: file.$id}), // data
    false, // async (optional)
    '/', // path (optional)
    sdk.ExecutionMethod.POST, // method
    {"Content-Type": "application/json"} // headers
);
`,language:"ts",process:!0,children:(e,a)=>{r();var t=s(`const file = await storage.createFile(
    '6632844900292d283610', // bucketId
    '66328472002415a37392', // fileId
    document.getElementById('uploader').files[0] // file from html input
);

const result = await functions.createExecution(
    '66325723000399792782', // functionId
    JSON.stringify({$id: file.$id}), // data
    false, // async (optional)
    '/', // path (optional)
    sdk.ExecutionMethod.POST, // method
    {"Content-Type": "application/json"} // headers
);`);o(e,t)},$$slots:{default:!0}});var he=n(ue);i(he,{children:(e,a)=>{r();var t=s("Another option is to trigger the function with a webhook when a new file is uploaded to Backrush Storage.");o(e,t)},$$slots:{default:!0}});var _e=n(he);i(_e,{children:(e,a)=>{I(e,{src:"/images/blog/scan-receipts-with-backrush-functions/events.png",alt:"Backrush event triggers for Function"})},$$slots:{default:!0}});var ge=n(_e);i(ge,{children:(e,a)=>{r();var t=s("The function will already have the file ID in the request body, you'll just need to store the returned data in a collection instead of returning it as a response.");o(e,t)},$$slots:{default:!0}});var $e=n(ge);v($e,{level:1,children:(e,a)=>{r();var t=s("Resources");o(e,t)},$$slots:{default:!0}});var fe=n($e);i(fe,{children:(e,a)=>{r();var t=s("Visit our documentation to learn more about Backrush, join us on Discord to be part of the discussion, view our blog and YouTube channel, or visit our GitHub repository to see our open-source code.");o(e,t)},$$slots:{default:!0}});var we=n(fe);Ae(we,{ordered:!1,marker:"-",children:(e,a)=>{var t=Fe(),p=x(t);w(p,{children:(l,P)=>{u(l,{href:"/docs/products/ai",children:(_,b)=>{r();var g=s("Docs");o(_,g)},$$slots:{default:!0}})},$$slots:{default:!0}});var c=n(p);w(c,{children:(l,P)=>{u(l,{href:"https://backrush.io/discord",children:(_,b)=>{r();var g=s("Discord");o(_,g)},$$slots:{default:!0}})},$$slots:{default:!0}});var $=n(c);w($,{children:(l,P)=>{u(l,{href:"/blog",children:(_,b)=>{r();var g=s("Blog");o(_,g)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=n($);w(d,{children:(l,P)=>{u(l,{href:"https://www.youtube.com/channel/UCtBJ1v69gm8NgbCju_03Fiw",children:(_,b)=>{r();var g=s("YouTube");o(_,g)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=n(d);w(f,{children:(l,P)=>{u(l,{href:"https://github.com/backrush/backrush",children:(_,b)=>{r();var g=s("GitHub");o(_,g)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(e,t)},$$slots:{default:!0}}),be(y),o(ve,y)},$$slots:{default:!0}}))}const at=Object.freeze(Object.defineProperty({__proto__:null,default:He,frontmatter:me},Symbol.toStringTag,{value:"Module"}));export{at as _,He as a};

import pandas as pd

df = pd.read_json('data.json')

unique_labels = []
data = []

for index, row in df.iterrows():
    if row['classification'] not in unique_labels:
        unique_labels.append(row['classification'])
    data.append({
        'comment': row['comment'],
        'label': row['classification']
    })

package_dict = {
    'data': { 0: data },
    'labels': {0: unique_labels}
}
package = pd.DataFrame.from_dict(package_dict)

package.to_json('data.json')